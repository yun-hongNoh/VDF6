import test from 'node:test';
import assert from 'node:assert/strict';
import {parsePlanText} from '../src/domain/vdf/parse';
import {SAMPLE_PLAN} from '../src/domain/vdf/sample';

test('existing Static VDF sample remains accepted',()=>{
  const plan=parsePlanText(SAMPLE_PLAN);
  assert.equal(plan.blocks.length,11);
});

test('canonical item_structure is accepted when present',()=>{
  const raw=JSON.stringify({blocks:[{
    id:'B1',title:'정의',track:'shape',info_type:'정의',item_count:1,item_structure:'용어 | 정의문',slots:['공학 | 문제 해결'],gate:null,card:null,subject:null,
    subject_traits:{branded_category:false,same_form_variants:false,replacement_type:false,scale_is_the_point:false,spreads_across_frame:false}
  }]});
  assert.equal(parsePlanText(raw).blocks[0].item_structure,'용어 | 정의문');
});

test('schema drift from provider output is rejected instead of silently normalized',()=>{
  const drift=JSON.stringify({blocks:[{id:'B1',title:'x',track:'shape',information_type:'정의',item_count:1,slots:['x'],gate:null,card:null,subject:null,subject_traits:{branded_category:false,same_form_variants:false,replacement_type:false,scale_is_the_point:false,spreads_across_frame:false}}]});
  assert.throws(()=>parsePlanText(drift),/information_type|공식 VDF/);
});

test('extra provider-designed block keys are rejected',()=>{
  const drift=JSON.stringify({blocks:[{id:'B1',title:'x',track:'shape',info_type:'정의',item_count:1,slots:['x'],gate:null,card:null,subject:null,subject_traits:{branded_category:false,same_form_variants:false,replacement_type:false,scale_is_the_point:false,spreads_across_frame:false},rationale:'x'}]});
  assert.throws(()=>parsePlanText(drift),/없는 키|rationale/);
});

test('top-level coverage_table or scope cannot replace the official blocks-only JSON',()=>{
  const drift=JSON.stringify({lecture:'x',blocks:[],coverage_table:{}});
  assert.throws(()=>parsePlanText(drift),/최상위 키는 blocks만/);
});
