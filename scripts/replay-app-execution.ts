import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import {getActiveEngine} from '../src/services/engineRegistry';
import {parseEngineResult} from '../src/services/engineAdapter';
import {analyzePlan,reviewEvaluation,presentationSvg} from '../src/services/vdfService';
const oldRoot=path.resolve(process.argv[2]||'../../vdf-p0');
const oldService=await import(pathToFileURL(path.join(oldRoot,'src/services/vdfService.ts')).href);
const oldRegistry=await import(pathToFileURL(path.join(oldRoot,'src/services/engineRegistry.ts')).href);
const beforeEngine=await oldRegistry.getActiveEngine(),engine=await getActiveEngine();
const opt={brand:'on',emptySide:'left',accent:'#1F6F68'} as const;
const root=path.resolve('docs/app-execution-replay');fs.mkdirSync(root,{recursive:true});
const summary:any[]=[];
const decode=(s:string)=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
const visible=(svg:string)=>[...svg.matchAll(/<g data-slot-index="\d+">([\s\S]*?)<\/g>/g)].map(g=>[...g[1].matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(m=>decode(m[1].replace(/<[^>]*>/g,''))).join(''));
for(const id of ['B01','B02','B03','B04','B05','B06'])for(const run of ['A','B']){
 const fixture=path.resolve(`tests/fixtures/benchmark/${id}/run_${run}`),out=path.join(root,id,`run_${run}`);fs.mkdirSync(out,{recursive:true});
 const raw=fs.readFileSync(path.join(fixture,'02_raw_provider_output.json'),'utf8');
 const frozen=JSON.parse(fs.readFileSync(path.join(fixture,'03_vdf_evaluation.json'),'utf8'));
 const frozenApp=JSON.parse(fs.readFileSync(path.join(fixture,'04_app_result.json'),'utf8'));
 assert.deepEqual(parseEngineResult(raw,engine),frozen);
 let before:any,beforeSuccess=true;
 try{before=oldService.analyzePlan(raw,opt,beforeEngine).map((x:any)=>oldService.reviewEvaluation(x,undefined,opt,beforeEngine));assert.deepEqual(before,frozenApp)}catch(error){beforeSuccess=false;before={status:'FAILED',error:String(error)};assert.equal(frozenApp.status,'FAILED');assert.equal(before.error,frozenApp.error)}
 const after=analyzePlan(raw,opt,engine).map(x=>reviewEvaluation(x,undefined,opt,engine));
 const blocks=after.map((x,i)=>{
  assert.deepEqual(x.block,frozen.blocks[i]);
  const production=x.diagramSvg,preview=presentationSvg(production);
  if(production){assert.deepEqual(visible(production),x.block.slots.map(s=>s.replace(/\r?\n/g,'')));assert.deepEqual(visible(preview!),visible(production));fs.writeFileSync(path.join(out,`${x.block.id}_production.svg`),production);fs.writeFileSync(path.join(out,`${x.block.id}_review.svg`),preview!)}
  if(beforeSuccess){const {diagramSvg:unusedA,...a}=before[i];const {diagramSvg:unusedB,...b}=x;assert.deepEqual(a,b)}
  return {id:x.block.id,info_type:x.infoType,slot_count:x.block.slots.length,svg_slots_preserved:production?true:null,review_slots_preserved:preview?true:null,neutral_relation:production?.includes('data-relation="unspecified"')??false,prompt_unchanged:beforeSuccess?JSON.stringify(before[i].prompt)===JSON.stringify(x.prompt):x.prompt===null};
 });
 const result={case_id:id,run,contract:'PASS',before_success:beforeSuccess,after_success:true,runtime_exceptions_after:0,frozen_blocks_unchanged:true,blocks};summary.push(result);
 for(const [name,data] of Object.entries({before,after,checks:result}))fs.writeFileSync(path.join(out,name+'.json'),JSON.stringify(data,null,2)+'\n');
}
fs.writeFileSync(path.join(root,'summary.json'),JSON.stringify(summary,null,2)+'\n');
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]!));
const samples=[['B01','A','B6'],['B02','A','B3'],['B03','B','B7'],['B05','B','B5'],['B06','A','B2']];
const html='<!doctype html><meta charset="utf-8"><title>App Execution HOTFIX Evidence</title><style>body{font-family:Arial,sans-serif;background:#eef2f3;margin:24px}article{max-width:960px;background:white;margin:24px auto;padding:20px}svg{width:100%;height:auto}h1{text-align:center}</style><h1>Frozen App Execution HOTFIX</h1>'+samples.map(([id,run,block])=>`<article><h2>${esc(id+' '+run+' '+block)}</h2>${fs.readFileSync(path.join(root,id,'run_'+run,block+'_review.svg'),'utf8')}</article>`).join('');
fs.writeFileSync(path.join(root,'gallery.html'),html);
console.log(JSON.stringify({runs:summary.length,contract_pass:summary.length,before_app_success:summary.filter(x=>x.before_success).length,after_app_success:summary.length,runtime_exceptions_after:0}));
