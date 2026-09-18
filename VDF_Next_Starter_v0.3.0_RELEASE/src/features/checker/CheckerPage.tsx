import {useEffect,useMemo,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,Copy,Download,FileJson2,Play,Upload} from 'lucide-react';
import {SAMPLE_PLAN} from '../../domain/vdf/sample';
import {promptText} from '../../domain/vdf/evaluate';
import type {BlockEvaluation,VdfOptions} from '../../domain/vdf/types';
import {analyzePlan,readTextFile,reviewEvaluation,type VdfReviewOverride} from '../../services/vdfService';
import {getActiveEngine,type EngineDef,type RegressionCase} from '../../services/engineRegistry';
import {runtimeRules} from '../../services/engineEvaluation';
import {InfoTooltip} from '../../ui/Tooltip';
import {JourneySteps} from '../../ui/StepProgress';
import {StatusBadge} from '../../ui/StatusBadge';
import {useToast} from '../../ui/Toast';
import {ResultDetails} from './ResultDetails';
import {DecisionRail} from './DecisionRail';
import {DecisionReview} from './DecisionReview';
import {DiagramPreview} from './DiagramPreview';
import {PromptBridge} from './PromptBridge';

const DEFAULT_OPT:VdfOptions={brand:'on',emptySide:'left',accent:'#1F6F68'};
export type RegressionLaunch={engineId:string;engineLabel:string;test:RegressionCase;nonce:number};
type RegressionComparison={status:'PASS'|'REVIEW'|'FAIL';checks:string[];summary:string};

function compareRegression(out:BlockEvaluation[],test:RegressionCase):RegressionComparison{
 const strict=(test.expected.strict||{}) as Record<string,unknown>;const checks:string[]=[];let failed=0;let checked=0;
 const expectedCount=typeof strict.block_count==='number'?strict.block_count:null;if(expectedCount!==null){checked++;const ok=out.length===expectedCount;checks.push(`${ok?'✓':'✕'} block_count ${out.length} / expected ${expectedCount}`);if(!ok)failed++}
 const expectedImages=typeof strict.image_count==='number'?strict.image_count:null;if(expectedImages!==null){checked++;const actual=out.filter(r=>r.card).length;const ok=actual===expectedImages;checks.push(`${ok?'✓':'✕'} image_count ${actual} / expected ${expectedImages}`);if(!ok)failed++}
 const blocks=Array.isArray(strict.blocks)?strict.blocks as Array<Record<string,unknown>>:[];
 for(const expected of blocks){const id=String(expected.id||'');const actual=out.find(r=>r.block.id===id);checked++;if(!actual){checks.push(`✕ ${id} missing`);failed++;continue}const fields:[string,unknown,unknown][]=[['info_type',actual.block.info_type,expected.info_type],['track',actual.block.track,expected.track],['card',actual.block.card??null,expected.card??null]];const bad=fields.filter(([,a,b])=>b!==undefined&&a!==b);if(bad.length){failed++;checks.push(`✕ ${id} ${bad.map(([k,a,b])=>`${k}:${String(a)}≠${String(b)}`).join(' · ')}`)}else checks.push(`✓ ${id} structure`)}
 if(!checked)return{status:'REVIEW',checks:['구조 비교용 strict Golden이 아직 확정되지 않았습니다.'],summary:`${test.status} 케이스 — 사람이 결과를 검토해야 합니다.`};
 if(failed)return{status:'FAIL',checks,summary:`${failed}개 Golden 기준이 다릅니다.`};return{status:'PASS',checks,summary:'현재 결과가 저장된 Golden 구조 기준을 통과했습니다.'};
}

export function CheckerPage({regressionLaunch}:{regressionLaunch?:RegressionLaunch|null}){
 const toast=useToast();const fileRef=useRef<HTMLInputElement>(null);const[input,setInput]=useState('');const[results,setResults]=useState<BlockEvaluation[]>([]);const[reviews,setReviews]=useState<Record<string,VdfReviewOverride>>({});const[error,setError]=useState('');const[current,setCurrent]=useState(1);const[maxAvailable,setMaxAvailable]=useState(1);const[sample,setSample]=useState(false);const[filter,setFilter]=useState<'all'|'image'|'warning'>('all');const[opt,setOpt]=useState<VdfOptions>(DEFAULT_OPT);const[engine,setEngine]=useState<EngineDef|null>(null);const[resultEngine,setResultEngine]=useState<EngineDef|null>(null);const[activeTest,setActiveTest]=useState<RegressionCase|null>(null);const[comparison,setComparison]=useState<RegressionComparison|null>(null);
 useEffect(()=>{let alive=true;const refresh=()=>getActiveEngine().then(e=>alive&&setEngine(e));refresh();window.addEventListener('vdf-engine-change',refresh);window.addEventListener('vdf-engine-registry-change',refresh);return()=>{alive=false;window.removeEventListener('vdf-engine-change',refresh);window.removeEventListener('vdf-engine-registry-change',refresh)}},[]);
 useEffect(()=>{if(!regressionLaunch)return;setActiveTest(regressionLaunch.test);setComparison(null);setInput('');setResults([]);setReviews({});setError('');setSample(false);setCurrent(1);setMaxAvailable(1);toast.push(`${regressionLaunch.test.id} 테스트 강의노트를 불러왔습니다.`,'success')},[regressionLaunch?.nonce]);
 useEffect(()=>{requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:'auto'});const target=document.querySelector(`[data-step-heading="${current}"]`) as HTMLElement|null;target?.focus({preventScroll:true})})},[current]);
 const evaluationEngine=resultEngine||engine;
 const pairs=useMemo(()=>results.map(base=>({base,current:evaluationEngine?reviewEvaluation(base,reviews[base.block.id],opt,evaluationEngine):base})),[results,reviews,opt,evaluationEngine]);
 const visible=useMemo(()=>pairs.filter(({current:r})=>filter==='all'||(filter==='image'&&!!r.card)||(filter==='warning'&&r.warnings.length>0)),[pairs,filter]);
 const warnings=pairs.reduce((n,{current:r})=>n+r.warnings.length,0);const images=pairs.filter(({current:r})=>r.card).length;const diagrams=pairs.filter(({current:r})=>r.diagramSvg&&!r.card).length;
 async function inspectPlan(text=input,isSample=false){try{const active=await getActiveEngine();const out=analyzePlan(text,opt,active);setResults(out);setResultEngine(active);setReviews({});setError('');setCurrent(2);setMaxAvailable(3);setSample(isSample);setComparison(activeTest?compareRegression(out,activeTest):null);toast.push(`${out.length}개 덩어리의 계획 검사가 완료되었습니다.`,'success')}catch(e){const msg=e instanceof Error?e.message:'알 수 없는 오류';setError(`계획을 읽지 못했습니다 — ${msg}. AI 답변의 2부 JSON 전체를 다시 넣어 주세요.`);setCurrent(1);toast.push('계획을 읽지 못했습니다.','error')}}
 async function pick(file?:File){if(!file)return;const text=await readTextFile(file);setInput(text);setMaxAvailable(Math.max(maxAvailable,2));setCurrent(1)}
 async function copyText(text:string,label:string){await navigator.clipboard.writeText(text);toast.push(`${label}를 클립보드에 복사했습니다.`,'success')}
 function downloadSvg(svg:string,id:string){const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));const a=document.createElement('a');a.href=url;a.download=`${id}.svg`;a.click();URL.revokeObjectURL(url);toast.push('SVG 파일을 저장했습니다.','success')}
 function setReview(id:string,next:VdfReviewOverride){setReviews(prev=>({...prev,[id]:next}))}function resetReview(id:string){setReviews(prev=>{const next={...prev};delete next[id];return next})}
 function isAdjusted(base:BlockEvaluation,currentResult:BlockEvaluation){return currentResult.infoType!==base.block.info_type||(currentResult.card??null)!==(base.block.card??null)}
 function go(step:number){if(step<=maxAvailable)setCurrent(step)}
 function showResults(){setCurrent(3);setMaxAvailable(4)}
 const rr=evaluationEngine?runtimeRules(evaluationEngine):null;
 return <div className="page checker-workflow">
  <header className="page-head"><p className="eyebrow">VDF WORKFLOW</p><h1 tabIndex={-1} data-step-heading={current===1?'1':undefined}>강의노트를 VDF 계획으로 만들고, 검사하고, 제작에 활용합니다</h1><p>현재 ACTIVE 엔진: <b>{engine?.label||'확인 중'}</b></p>{activeTest&&<p className="active-regression">Regression: <b>{activeTest.id} · {activeTest.name}</b> · {activeTest.status}</p>}</header>
  <JourneySteps current={current} maxAvailable={maxAvailable} onStep={go}/>

  {current===1&&<>
   <section className="entry-grid"><button className="choice-card" onClick={()=>{setActiveTest(null);setInput(SAMPLE_PLAN);setMaxAvailable(2);inspectPlan(SAMPLE_PLAN,true)}}><Play/><b>예시로 먼저 체험하기</b><span>검증된 샘플로 계획 검사까지 실행합니다.</span></button><button className="choice-card" onClick={()=>document.getElementById('prompt-bridge')?.scrollIntoView({behavior:'smooth',block:'start'})}><FileJson2/><b>내 강의로 시작하기</b><span>강의노트 → Prompt → AI 결과 순서로 진행합니다.</span></button></section>
   <PromptBridge initialNotes={activeTest?.input||''} initialLabel={activeTest?`${activeTest.id} · ${activeTest.name}`:undefined} onReady={()=>setMaxAvailable(Math.max(maxAvailable,1))}/>
   <section className="panel checker-panel"><div className="panel-head"><div><p className="eyebrow">AI RESULT</p><h2>AI가 만든 2부 JSON 붙여넣기</h2></div><StatusBadge tone="info">계획 입력</StatusBadge></div><p>ChatGPT·Gemini·Claude에서 나온 <b>2부 JSON</b>을 붙여넣으면 다음 단계에서 계약과 VDF 판단을 검사합니다.</p><textarea value={input} onChange={e=>{setInput(e.target.value);setError('');if(e.target.value.trim())setMaxAvailable(Math.max(maxAvailable,2))}} placeholder="AI 답변의 2부 JSON을 붙여넣으세요"/><div className="action-row"><button className="button primary" disabled={!input.trim()} onClick={()=>inspectPlan()}><ArrowRight size={17}/>2단계 계획 검사</button><button className="button secondary" onClick={()=>fileRef.current?.click()}><Upload size={17}/>JSON 파일</button><input ref={fileRef} type="file" accept=".json,.txt" hidden onChange={e=>pick(e.target.files?.[0])}/></div><div className="dropzone" onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();pick(e.dataTransfer.files?.[0])}}><FileJson2/>JSON/TXT 파일을 여기에 놓아도 됩니다.</div>{error&&<div className="error-box" role="alert">{error}</div>}</section>
  </>}

  {current===2&&<>
   <section className="panel step-intro"><div><p className="eyebrow">STEP 2</p><h2 tabIndex={-1} data-step-heading="2">계획 검사</h2><p>JSON 계약과 block / info_type / gate / card를 검사합니다. 이 단계에서는 아직 제작 결과를 판단하지 않습니다.</p></div><StatusBadge tone={warnings?'warning':'success'}>{warnings?`${warnings} REVIEW`:'PASS'}</StatusBadge></section>
   <section className="summary"><span><b>{results.length}</b> 덩어리</span><span><b>{images}</b> 그림</span><span><b>{diagrams}</b> 도형</span><span className={warnings?'warning-text':'success-text'}><b>{warnings}</b> 확인할 것</span><span className="summary-engine">검사 엔진 <b>{resultEngine?.label}</b></span></section>
   {comparison&&<section className={`panel regression-compare ${comparison.status.toLowerCase()}`}><div className="panel-head"><div><p className="eyebrow">REGRESSION CHECK</p><h2>{activeTest?.id} Golden 비교</h2></div><StatusBadge tone={comparison.status==='PASS'?'success':comparison.status==='FAIL'?'error':'warning'}>{comparison.status}</StatusBadge></div><p>{comparison.summary}</p><div className="regression-checks">{comparison.checks.map((c,i)=><span key={i}>{c}</span>)}</div></section>}
   {sample&&<section className="guided"><b>예시 체험</b><p>공식 JSON 계약과 엔진 경고가 어떻게 작동하는지 확인한 뒤 결과 확인으로 이동하세요.</p></section>}
   <div className="validation-list">{pairs.map(({current:r})=><article className="panel validation-row" key={r.block.id}><StatusBadge tone={r.warnings.length?'warning':'success'}>{r.block.id}</StatusBadge><div><b>{r.block.title}</b><p>{r.infoType} · {r.block.track} · {r.card?`카드 ${r.card}`:'배경 없음'}</p></div><div className="validation-status">{r.warnings.length?r.warnings.map(w=><span key={w.key}>{w.message}</span>):<span className="success-text">계약/기본 검사 통과</span>}</div></article>)}</div>
   <div className="step-actions"><button className="button secondary" onClick={()=>go(1)}><ArrowLeft size={17}/>계획 만들기로</button><button className="button primary" onClick={showResults}><ArrowRight size={17}/>3단계 결과 확인</button></div>
  </>}

  {current===3&&results.length>0&&<>
   <section className="panel step-intro"><div><p className="eyebrow">STEP 3</p><h2 tabIndex={-1} data-step-heading="3">결과 확인</h2><p>블록별 시각화 결과와 관계·카드를 확인하고 필요한 곳만 교수자가 조정합니다.</p></div><StatusBadge tone="info">{resultEngine?.label}</StatusBadge></section>
   <section className="panel settings"><div><label>브랜드 보호<select value={opt.brand} onChange={e=>setOpt({...opt,brand:e.target.value as 'on'|'off'})}><option value="on">켜기</option><option value="off">끄기</option></select></label></div><div><label>배경 빈쪽<select value={opt.emptySide} onChange={e=>setOpt({...opt,emptySide:e.target.value as 'left'|'right'})}><option value="left">왼쪽</option><option value="right">오른쪽</option></select></label></div><div><label>강조색<input type="color" value={opt.accent} onChange={e=>setOpt({...opt,accent:e.target.value})}/></label></div></section>
   <section className="summary"><span><b>{results.length}</b> 덩어리</span><span><b>{images}</b> 그림</span><span><b>{diagrams}</b> 도형</span><span><b>{warnings}</b> 확인할 것</span><div className="filter-row"><button className={filter==='all'?'active':''} onClick={()=>setFilter('all')}>전체</button><button className={filter==='image'?'active':''} onClick={()=>setFilter('image')}>그림만</button><button className={filter==='warning'?'active':''} onClick={()=>setFilter('warning')}>확인할 것만</button></div></section>
   <div className="result-list">{visible.map(({base,current:r})=>{const adjusted=isAdjusted(base,r);const cardRule=r.card&&rr?.cards[r.card];return <article className="result-card" key={r.block.id}><header><StatusBadge tone={r.card?'info':'neutral'}>{r.block.id}</StatusBadge><div><h3>{r.block.title}</h3><p>{r.card?'글 + 그림':r.diagramSvg?'글 + 도형':'글 중심'}</p></div>{r.card&&<StatusBadge tone={(cardRule?.status==='verified'||cardRule?.status==='verified_after_fix')?'success':'warning'}>{r.card} · {cardRule?.ko||r.card}</StatusBadge>}</header><DecisionRail result={r} adjusted={adjusted}/><div className="meta-row"><span><b>관계</b> {r.infoType}</span><span><b>항목</b> {r.block.item_count}</span>{adjusted&&<StatusBadge tone="warning">교수자 조정됨</StatusBadge>}</div>{r.block.gate&&<p className="reason">{r.block.gate.passed?'그릴 것이 정해졌다':'그림 없이 간다'} — {r.block.gate.reason}</p>}<DecisionReview base={base} current={r} override={reviews[r.block.id]} onChange={next=>setReview(r.block.id,next)} onReset={()=>resetReview(r.block.id)}/><ResultDetails result={r}/>{r.warnings.length>0&&<div className="warning-box"><b>확인할 것</b>{r.warnings.map(w=><p key={w.key}>• {w.message}</p>)}</div>}{!r.card&&r.diagramSvg&&<DiagramPreview result={r} onCopy={svg=>copyText(svg,'SVG')} onDownload={svg=>downloadSvg(svg,r.block.id)}/>} {r.prompt&&<div className="prompt-box"><div className="prompt-head"><b>Image Prompt</b><InfoTooltip text="현재 결과 엔진의 카드 규칙으로 조립한 6줄 이미지 지시문입니다."/><button onClick={()=>copyText(promptText(r.prompt!),'이미지 Prompt')}>복사</button></div><pre>{promptText(r.prompt)}</pre></div>}</article>})}</div>
   <div className="step-actions"><button className="button secondary" onClick={()=>go(2)}><ArrowLeft size={17}/>계획 검사로</button><button className="button primary" onClick={()=>{setCurrent(4);setMaxAvailable(4)}}><ArrowRight size={17}/>4단계 제작 활용</button></div>
  </>}

  {current===4&&results.length>0&&<>
   <section className="panel step-intro"><div><p className="eyebrow">STEP 4</p><h2 tabIndex={-1} data-step-heading="4">제작 활용</h2><p>확정한 결과에서 이미지 Prompt와 SVG 구조도를 제작 도구로 가져갑니다.</p></div><StatusBadge tone="success">READY</StatusBadge></section>
   <div className="production-grid">{pairs.map(({current:r})=><article className="panel production-card" key={r.block.id}><div className="panel-head"><div><StatusBadge tone="neutral">{r.block.id}</StatusBadge><h3>{r.block.title}</h3></div><StatusBadge tone={r.prompt?'info':r.diagramSvg?'success':'neutral'}>{r.prompt?'IMAGE':r.diagramSvg?'SVG':'TEXT'}</StatusBadge></div>{r.prompt?<><p>이미지 생성 AI용 6줄 Prompt</p><button className="button primary" onClick={()=>copyText(promptText(r.prompt!),'이미지 Prompt')}><Copy size={16}/>Prompt 복사</button></>:r.diagramSvg?<><p>슬라이드에 사용할 구조도 SVG</p><div className="action-row"><button className="button secondary" onClick={()=>copyText(r.diagramSvg!,'SVG')}><Copy size={16}/>SVG 복사</button><button className="button primary" onClick={()=>downloadSvg(r.diagramSvg!,r.block.id)}><Download size={16}/>SVG 저장</button></div></>:<p>이 블록은 글 중심으로 사용합니다.</p>}</article>)}</div>
   <section className="panel"><div className="panel-head"><div><p className="eyebrow">PPT HANDOFF</p><h2>PowerPoint 제작으로 넘기기</h2></div><StatusBadge tone="info">{resultEngine?.label}</StatusBadge></div><p>이미지 Prompt와 SVG를 복사/저장한 뒤 대학 PPT 템플릿에서 최종 레이아웃을 선택합니다. VDF는 레이아웃 자체를 지목하지 않습니다.</p></section>
   <div className="step-actions"><button className="button secondary" onClick={()=>go(3)}><ArrowLeft size={17}/>결과 확인으로</button></div>
  </>}
 </div>
}
