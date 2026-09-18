import test from 'node:test';
import assert from 'node:assert/strict';
import {parsePlanText} from '../src/domain/vdf/parse';
import {evaluateBlock,promptText} from '../src/domain/vdf/evaluate';
import {SAMPLE_PLAN} from '../src/domain/vdf/sample';

const opt={brand:'on',emptySide:'left',accent:'#1F6F68'} as const;

test('sample plan parses with frozen block count',()=>{
  const p=parsePlanText(SAMPLE_PLAN);
  assert.equal(p.blocks.length,11);
});

test('sample frozen domain results remain stable',()=>{
  const p=parsePlanText(SAMPLE_PLAN);
  const out=p.blocks.map(b=>evaluateBlock(b,opt));
  assert.equal(out.filter(r=>r.card).length,2);
  assert.equal(out.filter(r=>r.diagramSvg&&!r.card).length,6);
  assert.equal(out.reduce((n,r)=>n+r.warnings.length,0),0);
  assert.deepEqual(out.filter(r=>r.card).map(r=>[r.block.id,r.card]),[['B5','A'],['B11','A']]);
  assert.deepEqual(out.map(r=>r.infoType),p.blocks.map(b=>b.info_type));
});

test('image block builds frozen six-line prompt order',()=>{
  const p=parsePlanText(SAMPLE_PLAN);
  const b=p.blocks.find(x=>x.card==='A')!;
  const r=evaluateBlock(b,opt);
  assert.ok(r.prompt);
  assert.deepEqual(r.prompt!.map(x=>x.key),['subject','background','composition','style','ratio','negative']);
  assert.equal(r.prompt!.length,6);
  assert.match(promptText(r.prompt!),/^subject:/);
});

test('invalid input fails',()=>assert.throws(()=>parsePlanText('hello')));
