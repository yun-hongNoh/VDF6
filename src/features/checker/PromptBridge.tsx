import {useEffect,useRef,useState} from 'react';
import {Bot,Copy,ExternalLink,FileText,Sparkles,Upload} from 'lucide-react';
import {createVdfBridgePrompt} from '../../services/promptBridge';
import {getActiveEngine,type EngineDef} from '../../services/engineRegistry';
import {importLectureNote,type LectureImportResult} from '../../services/lectureNoteImport';
import {StatusBadge} from '../../ui/StatusBadge';
import {InfoTooltip} from '../../ui/Tooltip';
import {useToast} from '../../ui/Toast';

const AI_LINKS=[['ChatGPT','https://chatgpt.com/'],['Gemini','https://gemini.google.com/'],['Claude','https://claude.ai/']] as const;
function savedGpt(){try{return localStorage.getItem('vdf_gpt')||''}catch{return''}}

export function PromptBridge({onReady,onAiOpen,initialNotes='',initialLabel}:{onReady?:()=>void;onAiOpen?:()=>void;initialNotes?:string;initialLabel?:string}){
  const revision=useRef(0);const toast=useToast();const noteRef=useRef<HTMLTextAreaElement>(null);const fileRef=useRef<HTMLInputElement>(null);
  const[notes,setNotes]=useState('');const[prompt,setPrompt]=useState('');const[busy,setBusy]=useState(false);const[importBusy,setImportBusy]=useState(false);const[error,setError]=useState('');const[source,setSource]=useState<LectureImportResult|null>(null);const[dragging,setDragging]=useState(false);const[engine,setEngine]=useState<EngineDef|null>(null);
  useEffect(()=>{let alive=true;const refresh=()=>{const current=++revision.current;setPrompt('');return getActiveEngine().then(e=>{if(alive&&current===revision.current)setEngine(e)})};refresh();window.addEventListener('vdf-engine-change',refresh);window.addEventListener('vdf-engine-registry-change',refresh);return()=>{alive=false;revision.current++;window.removeEventListener('vdf-engine-change',refresh);window.removeEventListener('vdf-engine-registry-change',refresh)}},[]);
  useEffect(()=>{if(initialNotes){setNotes(initialNotes);setPrompt('');setError('');setSource(null)}},[initialNotes]);
  function updateNotes(value:string){setNotes(value);setPrompt('');setError('');if(source)setSource(null)}
  async function handleFile(file?:File){if(!file)return;try{setImportBusy(true);setError('');const result=await importLectureNote(file);setNotes(result.text);setPrompt('');setSource(result);toast.push(`${result.fileName}에서 강의노트를 불러왔습니다.`,'success');noteRef.current?.focus()}catch(e){const message=e instanceof Error?e.message:'강의노트 파일을 읽지 못했습니다.';setError(message);toast.push(message,'error')}finally{setImportBusy(false);if(fileRef.current)fileRef.current.value=''}}
  async function generate(){const current=revision.current;try{setBusy(true);setError('');const next=await createVdfBridgePrompt(notes);if(current!==revision.current)return '';setPrompt(next);onReady?.();toast.push('VDF Prompt를 만들었습니다.','success');return next}catch(e){const message=e instanceof Error?e.message:'Prompt를 만들지 못했습니다.';setError(message);toast.push(message,'error');noteRef.current?.focus();return''}finally{setBusy(false)}}
  async function copy(){const text=prompt||await generate();if(!text)return;await navigator.clipboard.writeText(text);toast.push('VDF Prompt를 복사했습니다.','success')}
  function openAi(url:string){window.open(url,'_blank','noopener');onAiOpen?.()}
  function openGpt(){let u=savedGpt();if(!u){u=window.prompt('기존 VDF GPT 주소를 붙여넣어 주세요','https://chatgpt.com/g/')?.trim()||'';if(u)try{localStorage.setItem('vdf_gpt',u)}catch{}}if(u)window.open(u,'_blank','noopener')}
  return <section className="panel bridge-panel" id="prompt-bridge" aria-labelledby="prompt-bridge-title">
    <div className="panel-head"><div><p className="eyebrow">STEP 1</p><h2 id="prompt-bridge-title">강의노트로 계획 만들기</h2></div><div className="tag-row"><StatusBadge tone="success">{engine?.label||'엔진 확인 중'}</StatusBadge><StatusBadge tone="info">Prompt Bridge <InfoTooltip text="현재 ACTIVE VDF 엔진의 지시문과 규칙을 강의노트와 묶어 실행 Prompt를 만듭니다."/></StatusBadge></div></div>
    <p className="bridge-lead">강의노트를 직접 붙여넣거나 DOCX·HWPX에서 불러온 뒤, 현재 ACTIVE 엔진으로 Prompt를 만듭니다.</p>{initialLabel&&<div className="regression-loaded"><StatusBadge tone="info">REGRESSION</StatusBadge><b>{initialLabel}</b><span>테스트 강의노트가 자동으로 불러와졌습니다.</span></div>}
    <div className="lecture-source-head"><label className="field-label" htmlFor="lecture-notes">강의노트</label><div className="lecture-source-actions"><input ref={fileRef} className="sr-only" type="file" accept=".docx,.hwpx,.txt,.md" onChange={e=>handleFile(e.target.files?.[0])}/><button className="button secondary nowrap" type="button" disabled={importBusy} onClick={()=>fileRef.current?.click()}><Upload size={16}/>{importBusy?'문서 읽는 중…':'DOCX · HWPX 불러오기'}</button><InfoTooltip text="DOCX와 HWPX의 본문·표를 브라우저에서 읽어 텍스트로 변환합니다. 구형 HWP는 HWPX 또는 DOCX로 저장해 주세요."/></div></div>
    <div className={`lecture-drop ${dragging?'dragging':''}`} onDragEnter={e=>{e.preventDefault();setDragging(true)}} onDragOver={e=>e.preventDefault()} onDragLeave={e=>{e.preventDefault();if(e.currentTarget===e.target)setDragging(false)}} onDrop={e=>{e.preventDefault();setDragging(false);handleFile(e.dataTransfer.files?.[0])}}><textarea ref={noteRef} id="lecture-notes" className="lecture-notes" value={notes} onChange={e=>updateNotes(e.target.value)} placeholder="강의노트를 붙여넣거나 DOCX·HWPX 파일을 이 영역에 놓으세요."/>{!notes&&<div className="lecture-drop-hint" aria-hidden="true"><FileText size={18}/><span>파일을 여기로 끌어다 놓아도 됩니다</span></div>}</div>
    {source&&<div className="lecture-import-meta" aria-live="polite"><StatusBadge tone="success">{source.format}</StatusBadge><b>{source.fileName}</b><span>본문 {source.paragraphs}개{source.tables?` · 표 ${source.tables}개 구조 보존`:''}</span></div>}
    <p className="field-help">지원: DOCX, HWPX, TXT, MD · 구형 HWP는 HWPX 또는 DOCX로 저장해 주세요.</p>
    <div className="action-row bridge-actions"><button className="button primary" onClick={generate} disabled={busy||importBusy}><Sparkles size={17}/>{busy?'Prompt 만드는 중…':'VDF Prompt 만들기'}</button><button className="button secondary" onClick={copy} disabled={busy||importBusy}><Copy size={17}/>Prompt 복사</button></div>
    {error&&<div className="error-box" role="alert">{error}</div>}
    {prompt&&<div className="generated-prompt"><div className="panel-head"><b>생성된 Prompt</b><StatusBadge tone="success">{engine?.version||''}</StatusBadge></div><pre>{prompt}</pre></div>}
    <div className="ai-links"><span><Bot size={17}/> 사용할 AI 열기</span>{AI_LINKS.map(([name,url])=><button className="button secondary" key={name} onClick={()=>openAi(url)}>{name}<ExternalLink size={14}/></button>)}<button className="button ghost" onClick={openGpt}>기존 VDF GPT</button></div>
  </section>
}
