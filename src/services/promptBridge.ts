import {getActiveEngine,type EngineDef} from './engineRegistry';

export function extractVdfInstruction(markdown:string){
  const marker='## 지시문';
  const start=markdown.indexOf(marker);
  if(start<0)return markdown.trim();
  const fenced=markdown.indexOf('```',start);
  if(fenced<0)return markdown.slice(start+marker.length).trim();
  const bodyStart=markdown.indexOf('\n',fenced)+1;
  // The original VDF instruction contains an inner ```json example.
  // Therefore the first closing fence is NOT the end of the instruction.
  // The canonical instruction ends at the last fence before the separate "1차 테스트" section.
  const testStart=markdown.indexOf('## 1차 테스트',bodyStart);
  const searchEnd=testStart>=0?testStart:markdown.length;
  const beforeTest=markdown.slice(bodyStart,searchEnd);
  const finalFence=beforeTest.lastIndexOf('\n```');
  return (finalFence>=0?beforeTest.slice(0,finalFence):beforeTest).trim();
}


function assertVdfKnowledge(label:string,value:string,required:string[]){
  const text=value.trim();
  if(!text)throw new Error(`${label}이 비어 있습니다. 앱 패키지를 다시 확인해 주세요.`);
  if(/<!doctype html|<html[\s>]|<div\s+id=["']root["']/i.test(text))throw new Error(`${label} 대신 HTML이 감지되었습니다. VDF 원본 파일이 올바르게 번들되지 않았습니다.`);
  const missing=required.filter(token=>!text.includes(token));
  if(missing.length)throw new Error(`${label} 검증에 실패했습니다. 누락 기준: ${missing.join(', ')}`);
}

export function buildVdfBridgePrompt(lectureNotes:string,instruction:string,rulesMarkdown:string,engine:EngineDef){
  const notes=lectureNotes.trim();
  if(!notes)throw new Error('강의노트를 입력해 주세요.');
  assertVdfKnowledge('VDF 실행 지시문',instruction,['블록마다 순서대로 판정','"track"','"info_type"','"item_structure"','"gate"','"subject_traits"']);
  assertVdfKnowledge('VDF 규칙 원본',rulesMarkdown,['정보 유형 6종','프리셋 카드']);
  const e=engine;
  return `# ${e.label} 블록 계획 실행\n\n현재 ACTIVE VDF Engine은 ${e.version} (${e.status})입니다. 아래 지시문과 규칙 원본만 사용하고 JSON 키를 바꾸지 마세요.\n\n## VDF 실행 지시문\n\n${instruction.trim()}\n\n## VDF 규칙 원본\n\n${rulesMarkdown.trim()}\n\n## 이번 강의노트\n\n${notes}`;
}

export async function createVdfBridgePrompt(lectureNotes:string){
  const engine=await getActiveEngine();
  const instruction=extractVdfInstruction(engine.instruction);
  return buildVdfBridgePrompt(lectureNotes,instruction,engine.rules,engine);
}
