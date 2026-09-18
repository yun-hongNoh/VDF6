import test from 'node:test';
import assert from 'node:assert/strict';
import {parsePlanText} from '../src/domain/vdf/parse';
import {evaluateBlock} from '../src/domain/vdf/evaluate';
import {SAMPLE_PLAN} from '../src/domain/vdf/sample';
import {presentationSvg,reviewEvaluation} from '../src/services/vdfService';
import {getActiveEngine} from '../src/services/engineRegistry';
const opt={brand:'on',emptySide:'left',accent:'#1F6F68'} as const;

test('professor relation override reuses active engine evaluation',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);assert.ok(base.diagramSvg);const reviewed=reviewEvaluation(base,{infoType:'정의'},opt,engine);assert.equal(reviewed.infoType,'정의');assert.equal(reviewed.diagramSvg,null)});
test('professor card override rebuilds the six-line prompt from active engine',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const reviewed=reviewEvaluation(base,{card:'C'},opt,engine);assert.equal(reviewed.card,'C');assert.deepEqual(reviewed.prompt!.map(x=>x.key),['subject','background','composition','style','ratio','negative'])});
test('presentation SVG wraps long text without changing canonical domain SVG',()=>{const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);assert.ok(base.diagramSvg);assert.equal(base.diagramSvg!.includes('<tspan'),false);const shown=presentationSvg(base.diagramSvg)!;assert.match(shown,/<tspan/);assert.match(shown,/font-size="13"/)})
