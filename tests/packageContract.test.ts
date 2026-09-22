import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import JSZip from 'jszip';
import 'fake-indexeddb/auto';
import {listEngines,getActiveEngine,getActiveEngineId,setActiveEngineId,registerEnginePackage,exportEnginePackage,deleteEngine,type EngineDef} from '../src/services/engineRegistry';
import {createVdfBridgePrompt} from '../src/services/promptBridge';
import {adaptEngineResult,parseEngineResult,validateAdapter,type EngineAdapter} from '../src/services/engineAdapter';
import {EVALUATION_SCHEMA,PLAN_SCHEMA,assertVdfEvaluation} from '../src/contracts/vdfEvaluation';
import {analyzePlan,reviewEvaluation} from '../src/services/vdfService';
import {SAMPLE_PLAN} from '../src/domain/vdf/sample';
import {evaluateBlock} from '../src/domain/vdf/evaluate';
import {parsePlanText} from '../src/domain/vdf/parse';
import stableRules from '../src/domain/vdf/rules.json';
import expRules from '../experiments/engine-6.1-semantic-boundary/rules.json';
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react';
import {DecisionReview} from '../src/features/checker/DecisionReview';
import {ResultDetails} from '../src/features/checker/ResultDetails';
import {runtimeRules} from '../src/services/engineEvaluation';

const memory=new Map<string,string>();
Object.defineProperty(globalThis,'localStorage',{value:{getItem:(k:string)=>memory.get(k)||null,setItem:(k:string,v:string)=>memory.set(k,v),removeItem:(k:string)=>memory.delete(k)},configurable:true});
Object.defineProperty(globalThis,'window',{value:new EventTarget(),configurable:true});
const opt={brand:'on',emptySide:'left',accent:'#1F6F68'} as const;
async function zipDirectory(dir:URL):Promise<JSZip>{
  const zip=new JSZip();
  async function visit(url:URL,prefix=''){
    for(const file of await readdir(url,{withFileTypes:true})){
      if(file.isDirectory())await visit(new URL(file.name+'/',url),prefix+file.name+'/');
      else zip.file(prefix+file.name,await readFile(new URL(file.name,url)));
    }
  }
  await visit(dir);return zip;
}
const experimentalZip=await zipDirectory(new URL('../experiments/engine-6.1-semantic-boundary/',import.meta.url));
async function register(zip:JSZip){return registerEnginePackage(new Blob([await zip.generateAsync({type:'uint8array'})]))}
const stable=(await listEngines()).find(e=>e.source==='BUILT_IN')!;
let experimental:EngineDef;

test('6.0 → register 6.1 → activate → reload → 6.0: same Contract, different actual knowledge',async()=>{
  assert.equal(getActiveEngineId(),stable.id);
  const prompt60=await createVdfBridgePrompt('동일 강의노트');
  experimental=await register(experimentalZip);
  assert.equal(experimental.regressionCases.length,4);
  assert.equal(experimental.adapter.kind,'identity');
  assert.equal(experimental.manifest.package_contract_version,'1.0');
  assert.equal(getActiveEngineId(),stable.id,'registration must not activate');
  setActiveEngineId(experimental.id);
  const reloaded=await getActiveEngine();
  assert.equal(reloaded.id,experimental.id);
  const prompt61=await createVdfBridgePrompt('동일 강의노트');
  assert.notEqual(prompt60,prompt61);
  assert.ok(prompt61.includes(reloaded.rulesJsonText));
  assert.ok(prompt61.includes(JSON.stringify(reloaded.outputSchema,null,2)));
  assert.match(prompt61,/semantic_boundary_layer/);
  assert.doesNotMatch(prompt60,/semantic_boundary_layer/);
  const a=parseEngineResult(SAMPLE_PLAN,stable),b=parseEngineResult(SAMPLE_PLAN,reloaded);
  assertVdfEvaluation(a);assertVdfEvaluation(b);assert.deepEqual(a.blocks,b.blocks);
  assert.equal(a.contractVersion,b.contractVersion);assert.notEqual(a.engine.version,b.engine.version);
  assert.deepEqual(analyzePlan(SAMPLE_PLAN,opt,stable),analyzePlan(SAMPLE_PLAN,opt,reloaded));
  setActiveEngineId(stable.id);assert.equal((await getActiveEngine()).id,stable.id);
  assert.equal(await createVdfBridgePrompt('동일 강의노트'),prompt60);
});

test('6.0/6.1 both preserve professor overrides, Cards A-F, six-line prompt and SVG',async()=>{
  for(const engine of [stable,await register(experimentalZip)]){
    const results=analyzePlan(SAMPLE_PLAN,opt,engine);
    const shape=results.find(x=>x.block.id==='B10')!;
    const entity=results.find(x=>x.block.id==='B7')!;
    assert.ok(shape.diagramSvg);
    const boot=reviewEvaluation(entity,{track:'image',card:'A'},opt,engine);
    assert.equal(boot.block.subject,'동전 펀치기, 포도주 압착기, 금속 활자 인쇄기');
    for(const card of ['A','B','C','D','E','F'] as const){
      const image=reviewEvaluation(shape,{track:'image',card,subject:'professor subject',subjectTraits:{branded_category:true,same_form_variants:true,spreads_across_frame:true}},opt,engine);
      assert.deepEqual(image.prompt?.map(x=>x.key),['subject','background','composition','style','ratio','negative']);
      assert.match(image.prompt![0].value,/professor subject.*unbranded/);
      const raw=(engine.rulesJson as typeof stableRules).cards[card];
      assert.equal(image.prompt![1].value,raw.prompt.background);
      assert.equal(image.prompt![2].value,raw.prompt.composition);
      assert.equal(image.prompt![3].value,raw.prompt.style);
      assert.equal(image.prompt![5].value,raw.prompt.negative);
      assert.ok(image.warnings.some(w=>w.key==='gate'));
      const back=reviewEvaluation(image,{track:'shape'},opt,engine);
      assert.equal(back.prompt,null);assert.equal(back.card,null);assert.ok(back.diagramSvg);
    }
    const text=reviewEvaluation(shape,{track:'text'},opt,engine);assert.equal(text.presentationTrack,'text');assert.equal(text.diagramSvg,null);
    const relation=reviewEvaluation(shape,{infoType:'정의'},opt,engine);assert.equal(relation.diagramSvg,null);
    const reset=reviewEvaluation(shape,undefined,opt,engine);assert.deepEqual(reset,shape);
    const cleared=reviewEvaluation(shape,{track:'image',card:'A',subject:''},opt,engine);assert.equal(cleared.prompt,null);
    // Identity adapter must not bootstrap an AI subject or change a decision.
    assert.equal(parseEngineResult(SAMPLE_PLAN,engine).blocks.find(b=>b.id==='B7')!.subject,null);
  }
});

test('stable rules hash and 6.1 downstream R4/R9/Card/prompt definitions are frozen',async()=>{
  const bytes=await readFile(new URL('../src/domain/vdf/rules.json',import.meta.url));
  assert.equal(createHash('sha256').update(bytes).digest('hex'),'c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5');
  for(const key of ['track','info_types','negative_blocks','cards','rules','lint','do_not_use','block_schema','element_cap_semantics'])assert.deepEqual(expRules[key as keyof typeof expRules],stableRules[key as keyof typeof stableRules],key);
  const blocks=parsePlanText(SAMPLE_PLAN).blocks;
  assert.deepEqual(analyzePlan(SAMPLE_PLAN,opt,stable),JSON.parse(JSON.stringify(blocks.map(b=>evaluateBlock(b,opt)))));
});

test('package export/import contains explicit schema/adapter/fixtures and preserves knowledge',async()=>{
  const engine=await register(experimentalZip);const exported=await exportEnginePackage(engine);
  const zip=await JSZip.loadAsync(await exported.arrayBuffer());
  for(const name of ['manifest.json','rules.json','VDF6_지시문.md','VDF6_규칙.md','contract.json','output.schema.json','adapter.json','evaluation.schema.json'])assert.ok(zip.file(name),name);
  const again=await register(zip);
  assert.equal(again.instruction,engine.instruction);assert.equal(again.rulesJsonText,engine.rulesJsonText);
  assert.deepEqual(again.outputSchema,engine.outputSchema);assert.deepEqual(again.regressionCases,engine.regressionCases);
  const exportedStable=await JSZip.loadAsync(await (await exportEnginePackage(stable)).arrayBuffer());
  assert.equal(await exportedStable.file('rules.json')!.async('text'),stable.rulesJsonText);
  await assert.rejects(register(exportedStable),/cannot be replaced/);
  await assert.rejects(deleteEngine(stable.id),/삭제할 수 없습니다/);
  setActiveEngineId(engine.id);await assert.rejects(deleteEngine(engine.id),/ACTIVE/);
  await assert.rejects(register(zip),/ACTIVE/);
  setActiveEngineId('missing-engine');assert.equal((await getActiveEngine()).id,stable.id);
  setActiveEngineId(stable.id);
});

test('declarative projection isolates a different internal taxonomy without App edits',async()=>{
  const blocks=parsePlanText(SAMPLE_PLAN).blocks;
  const internal={items:blocks.map(b=>({...b,mode:b.track==='image'?'object':'diagram',track:undefined})),pipeline:{note:'private metadata'}};
  const fields=Object.fromEntries(Object.keys(PLAN_SCHEMA.definitions.block.properties).map(k=>[k,{path:'/'+k}]));
  fields.track={path:'/mode',values:{object:'image',diagram:'shape'}} as any;
  const adapter:EngineAdapter={kind:'projection',contract_version:'1.0',blocks_path:'/items',fields};
  const schema={type:'object',required:['items'],additionalProperties:false,properties:{items:{type:'array',items:{type:'object'}},pipeline:{type:'object'}}};
  // Test-only package: no new engine judgment rule, just a different wire representation.
  const zip=await JSZip.loadAsync(await (await exportEnginePackage(await register(experimentalZip))).arrayBuffer());
  const manifest=JSON.parse(await zip.file('manifest.json')!.async('text'));manifest.version='contract-projection-test';zip.file('manifest.json',JSON.stringify(manifest));
  zip.file('output.schema.json',JSON.stringify(schema));zip.file('adapter.json',JSON.stringify(adapter));
  const engine=await register(zip);
  const result=adaptEngineResult(internal,engine);
  assert.deepEqual(result.blocks,JSON.parse(JSON.stringify(blocks)));
  assert.deepEqual(Object.keys(result).sort(),['blocks','contractVersion','engine']);
  assert.deepEqual(analyzePlan(JSON.stringify(internal),opt,engine),analyzePlan(SAMPLE_PLAN,opt,stable));
  internal.items[0].mode='unknown';assert.throws(()=>adaptEngineResult(internal,engine),/unmapped/);
  assert.throws(()=>validateAdapter({...adapter,execute:'alert(1)'}),/declarative/);
  assert.throws(()=>validateAdapter({...adapter,blocks_path:'/__proto__'}),/Unsafe/);
  setActiveEngineId(engine.id);assert.ok((await createVdfBridgePrompt('same notes')).includes(JSON.stringify(schema,null,2)));
  setActiveEngineId(stable.id);
});

test('schema drift is rejected before rendering; adapter does not mutate source',()=>{
  const plan=JSON.parse(SAMPLE_PLAN);const before=JSON.stringify(plan);const result=adaptEngineResult(plan,stable);
  result.blocks[0].title='edited';assert.equal(JSON.stringify(plan),before);
  for(const mutate of [
    (p:any)=>p.blocks[0].info_type='NEW',
    (p:any)=>p.blocks[0].track='text',
    (p:any)=>p.blocks[0].subject_traits.new_trait=true,
    (p:any)=>p.blocks[0].gate={passed:'yes',reason:'x'},
    (p:any)=>p.blocks[0].gate={passed:true,reason:'x',extra:1},
    (p:any)=>p.coverage_table=[],
    (p:any)=>p.blocks[0].item_count=-1,
  ]){const p=JSON.parse(before);mutate(p);assert.throws(()=>adaptEngineResult(p,stable),/schema/)}
  assert.deepEqual(parseEngineResult('설명\n```json\n'+SAMPLE_PLAN+'\n```',stable).blocks,adaptEngineResult(plan,stable).blocks);
});

test('incompatible contracts, incomplete v1 packages and executable files fail registration',async()=>{
  const base=await exportEnginePackage(await register(experimentalZip));
  for(const change of [
    (z:JSZip)=>z.remove('output.schema.json'),
    (z:JSZip)=>z.remove('adapter.json'),
    (z:JSZip)=>z.remove('regression'),
    (z:JSZip)=>z.file('adapter.json',JSON.stringify({kind:'javascript',contract_version:'1.0'})),
    (z:JSZip)=>z.file('evaluation.schema.json',JSON.stringify({...EVALUATION_SCHEMA,title:'different'})),
    (z:JSZip)=>z.file('output.schema.json',JSON.stringify({type:'object',$ref:'https://example.invalid/schema'})),
    (z:JSZip)=>z.file('execute.js','throw new Error("must never execute")'),
    (z:JSZip)=>z.file('nested/manifest.json','{}'),
    (z:JSZip)=>z.file('judgment.md','conflicting alias'),
    (z:JSZip)=>z.file('regression/R1_data_bigdata/expected.json','{invalid'),
  ]){const zip=await JSZip.loadAsync(await base.arrayBuffer());change(zip);await assert.rejects(register(zip))}
  assert.equal((await getActiveEngine()).id,stable.id);
});

test('legacy persisted 6.1 is migrated without rule/instruction changes; unknown legacy contract is rejected',async()=>{
  const legacy:any=structuredClone(await register(experimentalZip));
  delete legacy.outputSchema;delete legacy.adapter;delete legacy.manifest.package_contract_version;delete legacy.manifest.evaluation_contract_version;
  await new Promise<void>((resolve,reject)=>{
    const open=indexedDB.open('vdf-engine-registry',1);
    open.onsuccess=()=>{const db=open.result;const tx=db.transaction('engines','readwrite');tx.objectStore('engines').put(legacy);tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>reject(tx.error)};
    open.onerror=()=>reject(open.error);
  });
  setActiveEngineId(legacy.id);const migrated=await getActiveEngine();assert.equal(migrated.id,legacy.id);assert.deepEqual(migrated.outputSchema,PLAN_SCHEMA);assert.equal(migrated.instruction,legacy.instruction);assert.equal(migrated.rulesJsonText,legacy.rulesJsonText);
  setActiveEngineId(stable.id);
  const zip=await JSZip.loadAsync(await experimentalZip.generateAsync({type:'uint8array'}));
  const contract=JSON.parse(await zip.file('contract.json')!.async('text'));contract.schema.tracks.push('video');zip.file('contract.json',JSON.stringify(contract));
  await assert.rejects(register(zip),/exact VDF 6.0/);
});

test('card labels and verification in existing review UI use result-engine rules',async()=>{
  const engine={...stable,rulesJson:structuredClone(stable.rulesJson)};
  const raw=engine.rulesJson as typeof stableRules;raw.cards.A.ko='PACKAGE LABEL';raw.cards.A.status='unverified';
  const r=analyzePlan(SAMPLE_PLAN,opt,engine).find(x=>x.card==='A')!;const rules=runtimeRules(engine);
  const review=renderToStaticMarkup(createElement(DecisionReview,{base:r,current:r,override:undefined,rules,onChange:()=>{},onReset:()=>{}}));
  const details=renderToStaticMarkup(createElement(ResultDetails,{result:r,rules}));
  assert.match(review,/PACKAGE LABEL/);assert.match(details,/PACKAGE LABEL/);assert.match(details,/미검증\/주의/);
});
