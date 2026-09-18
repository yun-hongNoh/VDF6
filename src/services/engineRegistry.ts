import JSZip from 'jszip';
import {INSTRUCTION as I60,RULES as R60} from '../generated/engines/vdf60';
import {VDF60_REGRESSION_CASES} from '../generated/regression/vdf60';
import stableRulesJson from '../domain/vdf/rules.json';
import {RULES_JSON_TEXT as R60_JSON_TEXT} from '../generated/engines/vdf60RulesJson';

export type EngineStatus='STABLE'|'CANDIDATE'|'HOLD'|'REGISTERED';
export type RegressionState='AVAILABLE'|'NOT_INCLUDED';
export type RegressionCaseStatus='GOLDEN'|'PARTIAL_GOLDEN'|'CANDIDATE'|'UNKNOWN'|string;
export type EngineManifest={
  engine:string;
  version:string;
  status?:string;
  date?:string;
  baseline?:string;
  source_of_truth?:string;
  description?:string;
  contract_version?:string;
  [key:string]:unknown;
};
export type EngineContract={name?:string;version?:string;schema?:unknown;[key:string]:unknown};
export type RegressionCase={
  id:string;
  folder:string;
  name:string;
  status:RegressionCaseStatus;
  purpose:string;
  input:string;
  expected:Record<string,unknown>;
  readme:string;
};
export type EngineDef={
  id:string;
  version:string;
  status:EngineStatus;
  label:string;
  instruction:string;
  rules:string;
  rulesJson:unknown;
  rulesJsonText:string;
  contract:EngineContract;
  rulesHash:string;
  instructionHash:string;
  contractHash:string;
  registeredAt:string;
  source:'BUILT_IN'|'PACKAGE';
  regression:RegressionState;
  regressionCases:RegressionCase[];
  manifest:EngineManifest;
  packageBytes?:ArrayBuffer;
};

const ACTIVE_KEY='vdf.activeEngine';
const DB_NAME='vdf-engine-registry';
const DB_VERSION=1;
const STORE='engines';
const BUILTIN_ID='vdf-6.0.0';

const CANONICAL_CONTRACT:EngineContract={
  name:'VDF JSON Contract',version:'6.0',
  schema:{
    top_level:['blocks'],
    block_required:['id','title','track','info_type','item_count','slots','gate','card','subject','subject_traits'],
    block_optional:['item_structure','split'],
    info_types:['순서·절차','분류·계층','비교·대조','인과·수렴','정의','목록'],
    tracks:['image','shape'],cards:['A','B','C','D','E','F',null]
  }
};

function normalizeStatus(value:unknown):EngineStatus{const s=String(value||'REGISTERED').toUpperCase();return s==='STABLE'?'STABLE':s==='CANDIDATE'?'CANDIDATE':(s==='HOLD'||s==='EXPERIMENTAL')?'HOLD':'REGISTERED'}
function normalizeCaseStatus(value:unknown):RegressionCaseStatus{const s=String(value||'UNKNOWN').toUpperCase().replace(/\s+/g,'_');return s||'UNKNOWN'}
function safeLocalGet(key:string){try{return localStorage.getItem(key)||''}catch{return''}}
function safeLocalSet(key:string,value:string){try{localStorage.setItem(key,value)}catch{}}
function textEncoder(text:string){return new TextEncoder().encode(text)}
export async function sha256Text(text:string){
  if(globalThis.crypto?.subtle){const buf=await crypto.subtle.digest('SHA-256',textEncoder(text));return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('')}
  let h=2166136261;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}return `fnv-${(h>>>0).toString(16).padStart(8,'0')}`;
}
function builtInRegression():RegressionCase[]{
  const cases:RegressionCase[]=[];
  for(const c of VDF60_REGRESSION_CASES){
    if(c.id==='CASE-01'){
      cases.push({
        id:'CASE-01H',folder:'CASE-01H_historical_reference',name:'1주차 1강 — Historical Golden Reference',status:'REFERENCE_ONLY',
        purpose:'과거 VDF 6.0의 7블록/3이미지 공식 기준. 당시 정확한 입력 원문이 현재 패키지에 없으므로 자동 실행·채점하지 않는다.',
        input:'',
        expected:c.expected as unknown as Record<string,unknown>,
        readme:'Historical Golden은 기준 보존용이다. 현재 강의노트와 동일 입력이라고 가정하지 않는다.'
      });
      cases.push({
        id:'CASE-01C',folder:c.folder,name:'1주차 1강 — Current Lecture',status:'CURRENT_INPUT',
        purpose:'현재 강의노트 입력으로 6.0의 일반화 성능을 관찰한다. Historical Golden의 7블록 정답을 강제하지 않는다.',
        input:c.input,
        expected:{
          case_id:'CASE-01C',status:'current_input',schema_valid:true,
          evaluation_mode:'OBSERVATION_ONLY',
          historical_reference:'CASE-01H',
          watch:['scope overflow','concept-example split','visual candidate loss','info_type drift','card drift','schema issues'],
          rule:'단일 케이스 실패만으로 엔진 규칙을 추가하지 않는다.'
        },
        readme:'현재 강의노트에는 Historical Golden 작성 당시와 다른 학습코너가 포함되어 있을 수 있다. 결과는 관찰용으로 기록한다.'
      });
      continue;
    }
    cases.push({id:c.id,folder:c.folder,name:c.name,status:normalizeCaseStatus(c.status),purpose:c.purpose,input:c.input,expected:c.expected as unknown as Record<string,unknown>,readme:c.readme});
  }
  return cases;
}
async function builtInStable():Promise<EngineDef>{
  const contract=CANONICAL_CONTRACT;const regressionCases=builtInRegression();
  return {id:BUILTIN_ID,version:'6.0.0',status:'STABLE',label:'VDF 6.0 Reference / Stable',instruction:I60,rules:R60,rulesJson:stableRulesJson,rulesJsonText:R60_JSON_TEXT,contract,
    rulesHash:'c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5',instructionHash:await sha256Text(I60),contractHash:await sha256Text(JSON.stringify(contract)),
    registeredAt:'2026-08-25',source:'BUILT_IN',regression:regressionCases.length?'AVAILABLE':'NOT_INCLUDED',regressionCases,
    manifest:{engine:'VDF',version:'6.0.0',status:'STABLE',date:'2026-08-25',source_of_truth:'rules.json',contract_version:'6.0',description:'Reference VDF 6.0 engine · minimal-rule stable baseline'}};
}
function idbAvailable(){return typeof indexedDB!=='undefined'}
function openDb():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,DB_VERSION);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'})};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function idbAll():Promise<EngineDef[]>{if(!idbAvailable())return[];const db=await openDb();return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).getAll();req.onsuccess=()=>resolve((req.result||[]) as EngineDef[]);req.onerror=()=>reject(req.error)})}
async function idbPut(engine:EngineDef){if(!idbAvailable())return;const db=await openDb();await new Promise<void>((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(engine);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
async function idbDelete(id:string){if(!idbAvailable())return;const db=await openDb();await new Promise<void>((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
function normalizeStored(e:EngineDef):EngineDef{const regressionCases=Array.isArray(e.regressionCases)?e.regressionCases:[];return {...e,rulesJsonText:e.rulesJsonText||JSON.stringify(e.rulesJson,null,2),regressionCases,regression:regressionCases.length?'AVAILABLE':e.regression||'NOT_INCLUDED'}}

export async function listEngines():Promise<EngineDef[]>{const stable=await builtInStable();let packages:EngineDef[]=[];try{packages=(await idbAll()).map(normalizeStored)}catch{}return [stable,...packages.filter(e=>e.id!==BUILTIN_ID)].sort((a,b)=>a.version.localeCompare(b.version,undefined,{numeric:true}))}
export async function getActiveEngine():Promise<EngineDef>{const engines=await listEngines();const wanted=safeLocalGet(ACTIVE_KEY);return engines.find(e=>e.id===wanted)||engines[0]}
export function getActiveEngineId(){return safeLocalGet(ACTIVE_KEY)||BUILTIN_ID}
export function setActiveEngineId(id:string){safeLocalSet(ACTIVE_KEY,id);window.dispatchEvent(new CustomEvent('vdf-engine-change',{detail:id}))}
export async function deleteEngine(id:string){if(id===BUILTIN_ID)throw new Error('Built-in VDF 6.0 Reference / Stable은 삭제할 수 없습니다.');if(getActiveEngineId()===id)throw new Error('현재 ACTIVE 엔진은 삭제할 수 없습니다. 먼저 다른 엔진을 ACTIVE로 적용해 주세요.');await idbDelete(id);window.dispatchEvent(new CustomEvent('vdf-engine-registry-change'))}

function findFile(zip:JSZip,names:string[]){const entries=Object.values(zip.files).filter(f=>!f.dir);for(const name of names){const direct=zip.file(name);if(direct)return direct;const hit=entries.find(f=>f.name.endsWith('/'+name)||f.name===name);if(hit)return hit}return null}
async function requiredText(zip:JSZip,label:string,names:string[]){const f=findFile(zip,names);if(!f)throw new Error(`${label} 파일이 없습니다: ${names[0]}`);return await f.async('text')}
function baseName(path:string){return path.split('/').filter(Boolean).pop()||path}
async function parseRegressionCases(zip:JSZip):Promise<RegressionCase[]>{
  const files=Object.values(zip.files).filter(f=>!f.dir);
  const inputFiles=files.filter(f=>/(^|\/)regression\/(?:cases\/)?[^/]+\/input\.md$/i.test(f.name)||/(^|\/)cases\/[^/]+\/input\.md$/i.test(f.name));
  const cases:RegressionCase[]=[];
  for(const inputFile of inputFiles){
    const dir=inputFile.name.slice(0,inputFile.name.lastIndexOf('/'));const expectedFile=zip.file(`${dir}/expected.json`);if(!expectedFile)continue;
    let expected:Record<string,unknown>;try{expected=JSON.parse(await expectedFile.async('text')) as Record<string,unknown>}catch{continue}
    const readmeFile=zip.file(`${dir}/README.md`);const input=await inputFile.async('text');const readme=readmeFile?await readmeFile.async('text'):'';
    const id=String(expected.case_id||baseName(dir));const name=String(expected.name||id);const status=normalizeCaseStatus(expected.status);const purpose=String(expected.purpose||expected.golden_promotion_rule||'');
    cases.push({id,folder:baseName(dir),name,status,purpose,input,expected,readme});
  }
  return cases.sort((a,b)=>a.id.localeCompare(b.id,undefined,{numeric:true}));
}

export async function registerEnginePackage(file:Blob & {name?:string}):Promise<EngineDef>{
  const packageBytes=await file.arrayBuffer();const zip=await JSZip.loadAsync(packageBytes);
  const manifestText=await requiredText(zip,'manifest.json',['manifest.json']);const rulesText=await requiredText(zip,'rules.json',['rules.json','engine/rules.json']);
  const instruction=await requiredText(zip,'VDF 지시문',['VDF6_지시문.md','vdf_instructions.md','engine/VDF6_지시문.md']);const rules=await requiredText(zip,'VDF 규칙 Markdown',['VDF6_규칙.md','vdf_rules.md','engine/VDF6_규칙.md']);const contractText=await requiredText(zip,'contract.json',['contract.json','engine/contract.json']);
  let manifest:EngineManifest,rulesJson:unknown,contract:EngineContract;try{manifest=JSON.parse(manifestText)}catch{throw new Error('manifest.json을 읽을 수 없습니다.')}try{rulesJson=JSON.parse(rulesText)}catch{throw new Error('rules.json을 읽을 수 없습니다.')}try{contract=JSON.parse(contractText)}catch{throw new Error('contract.json을 읽을 수 없습니다.')}
  if(String(manifest.engine||'').toUpperCase()!=='VDF')throw new Error('manifest.engine은 VDF여야 합니다.');if(!manifest.version)throw new Error('manifest.version이 없습니다.');if(!instruction.includes('블록마다 순서대로 판정'))throw new Error('지시문이 VDF 실행 지시문 형식과 맞지 않습니다.');if(!rules.includes('정보 유형 6종'))throw new Error('규칙 Markdown에서 VDF 정보 유형 기준을 찾지 못했습니다.');
  const raw=rulesJson as {cards?:Record<string,unknown>;info_types?:Record<string,unknown>};if(!raw.cards||!raw.info_types)throw new Error('rules.json에 cards 또는 info_types가 없습니다.');for(const key of ['A','B','C','D','E','F'])if(!(key in raw.cards))throw new Error(`rules.json에 카드 ${key}가 없습니다.`);
  if(!contract.version)throw new Error('contract.json에 version이 없습니다.');if(manifest.contract_version&&String(manifest.contract_version)!==String(contract.version))throw new Error(`manifest.contract_version(${manifest.contract_version})과 contract.version(${contract.version})이 다릅니다.`);const schema=(contract.schema||{}) as {top_level?:unknown};if(!Array.isArray(schema.top_level)||!schema.top_level.includes('blocks'))throw new Error('contract.json이 VDF blocks 계약을 선언하지 않습니다.');
  const regressionCases=await parseRegressionCases(zip);const version=String(manifest.version);const id=`vdf-${version}`.toLowerCase().replace(/[^a-z0-9._-]+/g,'-');const status=normalizeStatus(manifest.status);
  const engine:EngineDef={id,version,status,label:`VDF ${version}${status==='HOLD'?' HOLD / Experimental':status==='CANDIDATE'?' Candidate':status==='STABLE'?' Stable':''}`,instruction,rules,rulesJson,rulesJsonText:rulesText,contract,rulesHash:await sha256Text(rulesText),instructionHash:await sha256Text(instruction),contractHash:await sha256Text(contractText),registeredAt:new Date().toISOString(),source:'PACKAGE',regression:regressionCases.length?'AVAILABLE':'NOT_INCLUDED',regressionCases,manifest,packageBytes};
  await idbPut(engine);window.dispatchEvent(new CustomEvent('vdf-engine-registry-change',{detail:engine.id}));return engine;
}
export async function registerEnginePackageFromUrl(url:string){const res=await fetch(url);if(!res.ok)throw new Error(`엔진 패키지를 불러오지 못했습니다. (${res.status})`);const blob=await res.blob();return await registerEnginePackage(Object.assign(blob,{name:url.split('/').pop()||'engine.zip'}))}

async function generateEngineZip(engine:EngineDef):Promise<Blob>{
  const zip=new JSZip();zip.file('manifest.json',JSON.stringify(engine.manifest,null,2));zip.file('rules.json',engine.rulesJsonText||JSON.stringify(engine.rulesJson,null,2));zip.file('VDF6_규칙.md',engine.rules);zip.file('VDF6_지시문.md',engine.instruction);zip.file('contract.json',JSON.stringify(engine.contract,null,2));
  for(const c of engine.regressionCases){const dir=`regression/${c.folder}`;zip.file(`${dir}/input.md`,c.input);zip.file(`${dir}/expected.json`,JSON.stringify(c.expected,null,2));if(c.readme)zip.file(`${dir}/README.md`,c.readme)}
  return await zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}});
}
export async function exportEnginePackage(engine:EngineDef):Promise<Blob>{if(engine.source==='PACKAGE'&&engine.packageBytes)return new Blob([engine.packageBytes],{type:'application/zip'});return await generateEngineZip(engine)}
export function enginePackageFileName(engine:EngineDef){return `VDF_Engine_${engine.version.replace(/[^a-zA-Z0-9._-]+/g,'_')}_${engine.status}.zip`}
export async function downloadEnginePackage(engine:EngineDef){const blob=await exportEnginePackage(engine);const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=enginePackageFileName(engine);document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500)}
export function exportableContract(){return CANONICAL_CONTRACT}
