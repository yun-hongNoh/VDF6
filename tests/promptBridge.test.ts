import test from 'node:test';
import assert from 'node:assert/strict';
import {buildVdfBridgePrompt,extractVdfInstruction} from '../src/services/promptBridge';
import {VDF_INSTRUCTION_MARKDOWN,VDF_RULES_MARKDOWN} from '../src/generated/vdfKnowledge';
import {PLAN_SCHEMA} from '../src/contracts/vdfEvaluation';
import {IDENTITY_ADAPTER} from '../src/services/engineAdapter';
import type {EngineDef} from '../src/services/engineRegistry';

const validInstruction=`블록마다 순서대로 판정한다\n2부 — JSON 한 덩어리\n{"track":"image","info_type":"정의","item_structure":"용어 | 정의문","gate":{"passed":true,"reason":"x"},"subject_traits":{}}\n## 하지 않는 것`;
const validRules=`# VDF 6.0 규칙\n\n## 2. 정보 유형 6종\n내용\n\n## 5. 프리셋 카드\n내용`;
const engine={outputSchema:PLAN_SCHEMA,adapter:IDENTITY_ADAPTER,id:'test',version:'6.0.0',status:'STABLE',label:'VDF 6.0 Stable',instruction:validInstruction,rules:validRules,rulesJson:{},contract:{},rulesHash:'r',instructionHash:'i',contractHash:'c',registeredAt:'2026-01-01',source:'BUILT_IN',regression:'AVAILABLE',manifest:{engine:'VDF',version:'6.0.0'}} as EngineDef;

test('extracts only the original VDF instruction fence, not the golden test',()=>{const out=extractVdfInstruction(VDF_INSTRUCTION_MARKDOWN);assert.match(out,/너는 대학 온라인 강의 슬라이드의 본문 시각화를 계획한다/);assert.match(out,/"item_structure"/);assert.doesNotMatch(out,/## 1차 테스트/)});
test('bridge prompt carries original instruction, rules and lecture notes without invented schema',()=>{const out=buildVdfBridgePrompt('강의노트 본문',validInstruction,validRules,engine);assert.match(out,/블록마다 순서대로 판정/);assert.match(out,/# VDF 6\.0 규칙/);assert.match(out,/강의노트 본문/);assert.match(out,/JSON 키를 바꾸지 마세요/);assert.doesNotMatch(out,/information_type/);assert.doesNotMatch(out,/background_layer/)});
test('bundled canonical knowledge is present and not HTML fallback',()=>{assert.match(VDF_RULES_MARKDOWN,/# VDF 6\.0 규칙/);assert.match(VDF_INSTRUCTION_MARKDOWN,/VDF 6\.0 Gem — 설정과 1차 테스트/);assert.doesNotMatch(VDF_RULES_MARKDOWN,/<div id="root">/i)});
test('empty lecture notes are rejected',()=>assert.throws(()=>buildVdfBridgePrompt(' ',validInstruction,validRules,engine)));
test('HTML fallback cannot be accepted as VDF knowledge',()=>{assert.throws(()=>buildVdfBridgePrompt('강의노트','<!doctype html><div id="root"></div>',validRules,engine),/HTML/);assert.throws(()=>buildVdfBridgePrompt('강의노트',validInstruction,'<!doctype html><div id="root"></div>',engine),/HTML/)})
