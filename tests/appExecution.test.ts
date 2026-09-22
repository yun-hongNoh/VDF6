import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {renderDiagram,explicitEdges} from '../src/domain/vdf/diagram';
import {getActiveEngine} from '../src/services/engineRegistry';
import {parseEngineResult} from '../src/services/engineAdapter';
import {analyzePlan,reviewEvaluation,presentationSvg} from '../src/services/vdfService';
import type {VdfBlock} from '../src/domain/vdf/types';
const opt={brand:'on',emptySide:'left',accent:'#1F6F68'} as const;
const decode=(s:string)=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
export function visibleSlots(svg:string){return [...svg.matchAll(/<g data-slot-index="\d+">([\s\S]*?)<\/g>/g)].map(g=>[...g[1].matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(m=>decode(m[1].replace(/<[^>]*>/g,''))).join(''));}
function block(slots:string[],type:VdfBlock['info_type']='목록',structure=''):VdfBlock{return {id:'X',title:'Execution fixture',slots,item_count:slots.length,info_type:type,item_structure:structure,track:'shape',gate:null,card:null,subject:null,subject_traits:{branded_category:false,same_form_variants:false,replacement_type:false,scale_is_the_point:false,spreads_across_frame:false}}}
for(const slots of [[],[''],['항목 | A | B'],['첫 행 | A | B','둘째 행 | C | D'],Array.from({length:30},(_,i)=>`${i} | 값 A | 값 B`)])test(`comparison preserves ${slots.length} rows including empty values`,()=>{const svg=renderDiagram(block(slots,'비교·대조'),'비교·대조',opt.accent);if(!slots.length)assert.equal(svg,null);else assert.deepEqual(visibleSlots(svg!),slots)});
test('sequence retains number, name, description and only consecutive edges',()=>{const b=block(['1 | 수집 | 데이터 확보','2 | 분석 | 목적에 맞게 분석'],'순서·절차');const svg=renderDiagram(b,b.info_type,opt.accent)!;assert.deepEqual(visibleSlots(svg),b.slots);assert.deepEqual([...svg.matchAll(/data-edge="([^"]+)"/g)].map(m=>m[1]),['0:1'])});
test('long multiline and escaped list content survives both production and preview',()=>{const b=block(['세포막 | 기능 <A> & "B"\n'+('긴 설명🙂 W'.repeat(120)),' | ','name | description']);const svg=renderDiagram(b,b.info_type,opt.accent)!;assert.deepEqual(visibleSlots(svg),b.slots.map(s=>s.replace(/\r?\n/g,'')));assert.deepEqual(visibleSlots(presentationSvg(svg)!),visibleSlots(svg));assert.ok(!svg.includes('<A>'));assert.ok(Number(svg.match(/viewBox="0 0 900 (\d+)"/)![1])>500)});
for(const [structure,expected] of [['A + B → C',[[0,2],[1,2]]],['A → B + C',[[0,1],[0,2]]],['A → B → C',[[0,1],[1,2]]]] as const)test(`explicit relation ${structure}`,()=>{const b=block(['A | first','B | second','C | third'],'인과·수렴',structure);assert.deepEqual(explicitEdges(b),expected);const svg=renderDiagram(b,b.info_type,opt.accent)!;assert.deepEqual([...svg.matchAll(/data-edge="([^"]+)"/g)].map(m=>m[1]),expected.map(e=>e.join(':')));assert.deepEqual(visibleSlots(svg),b.slots)});
test('generic, incomplete, duplicated or ambiguous relations never infer edges from order',()=>{for(const structure of ['원인 → 중간 → 결과','A + B → unknown','A → A → C','A → B']){const b=block(['A','B','C'],'인과·수렴',structure);assert.equal(explicitEdges(b),null);assert.doesNotMatch(renderDiagram(b,b.info_type,opt.accent)!,/data-edge=/)}});
for(const id of ['B01','B02','B03','B04','B05','B06'])for(const run of ['A','B'])test(`frozen ${id} ${run}: Contract, slots, Review, Prompt and production`,async()=>{
 const dir=new URL(`./fixtures/benchmark/${id}/run_${run}/`,import.meta.url);
 const raw=fs.readFileSync(new URL('02_raw_provider_output.json',dir),'utf8');
 const frozen=JSON.parse(fs.readFileSync(new URL('03_vdf_evaluation.json',dir),'utf8'));
 const engine=await getActiveEngine();assert.deepEqual(parseEngineResult(raw,engine),frozen);
 const before=JSON.parse(fs.readFileSync(new URL('04_app_result.json',dir),'utf8'));
 const app=analyzePlan(raw,opt,engine).map(x=>reviewEvaluation(x,undefined,opt,engine));
 assert.equal(app.length,frozen.blocks.length);
 app.forEach((x,i)=>{assert.deepEqual(x.block,frozen.blocks[i]);if(x.diagramSvg){assert.deepEqual(visibleSlots(x.diagramSvg),x.block.slots.map(s=>s.replace(/\r?\n/g,'')));assert.deepEqual(visibleSlots(presentationSvg(x.diagramSvg)!),visibleSlots(x.diagramSvg));if(x.infoType==='인과·수렴')assert.doesNotMatch(x.diagramSvg,/data-edge=/)}if(Array.isArray(before)){const {diagramSvg:a,...old}=before[i];const {diagramSvg:b,...current}=x;assert.deepEqual(current,old)}});
});
