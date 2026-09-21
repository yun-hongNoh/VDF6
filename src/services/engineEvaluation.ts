import {diagramFor} from '../domain/vdf/evaluate';
import type {BlockEvaluation,CardKey,PresentationTrack,PromptLine,VdfBlock,VdfOptions,VdfWarning} from '../domain/vdf/types';
import type {EngineDef} from './engineRegistry';

type RawCard={
  ko?:string;element_cap?:number|null;model?:{primary?:string}|string;status?:string;
  prompt?:{background?:string;composition?:string;style?:string;negative?:string;subject_example?:string};
};
type RawRules={cards?:Record<string,RawCard>;info_types?:Record<string,{ko?:string}>};

type CardRule={ko:string;cap:number|null;model:string;status:string;bg:string;cp:string;st:string;ng:string;ex:string};
export type RuntimeRules={cards:Record<CardKey,CardRule>;infoTypes:string[]};

export function runtimeRules(engine:EngineDef):RuntimeRules{
  const source=(engine.rulesJson||{}) as RawRules;
  const cards={} as Record<CardKey,CardRule>;
  for(const key of ['A','B','C','D','E','F'] as CardKey[]){
    const c=source.cards?.[key];if(!c)continue;
    cards[key]={
      ko:c.ko||key,cap:c.element_cap??null,model:typeof c.model==='string'?c.model:(c.model?.primary||''),status:c.status||'unknown',
      bg:c.prompt?.background||'',cp:c.prompt?.composition||'',st:c.prompt?.style||'',ng:c.prompt?.negative||'',ex:c.prompt?.subject_example||''
    };
  }
  const infoTypes=Object.values(source.info_types||{}).map(v=>v?.ko).filter((x):x is string=>!!x);
  return {cards,infoTypes};
}

function warnings(block:VdfBlock,card:CardKey|null,infoType:string,opt:VdfOptions,rr:RuntimeRules):VdfWarning[]{
  const w:VdfWarning[]=[];const t=block.subject_traits||{};
  if(rr.infoTypes.length&&!rr.infoTypes.includes(infoType))w.push({key:'it',message:`항목 관계 이름은 여섯 개뿐입니다 — ${infoType}`});
  if(card){
    const c=rr.cards[card];
    if(!c){w.push({key:'unver',message:`현재 ACTIVE 엔진에 배치 ${card} 정의가 없습니다.`});return w}
    if(card==='A'&&infoType==='분류·계층')w.push({key:'cat_a',message:'항목이 두 무리로 묶여 있어서 배치 A는 맞지 않습니다. 한 줄에 늘어놓으면 어느 게 어느 무리인지 사라집니다.'});
    if(c.cap&&block.item_count>c.cap)w.push({key:'cap',message:`항목이 ${block.item_count}개인데 이 배치는 최대 ${c.cap}개입니다. 일부만 그리지 말고 덩어리를 나눠 주세요.`});
    if(c.status!=='verified'&&c.status!=='verified_after_fix')w.push({key:'unver',message:`배치 ${card}는 아직 충분히 확인되지 않았습니다. 결과를 꼭 눈으로 확인해 주세요.`});
    if(t.replacement_type&&!t.same_form_variants)w.push({key:'base',message:'무언가를 바꾼 것을 그리는데 같은 사물의 여러 모습이 아닙니다. 바뀌기 전 모습이 빠졌을 수 있습니다.'});
    if(t.branded_category&&opt.brand==='off')w.push({key:'brand',message:'브랜드가 연상되는 물건인데 설정이 꺼져 있습니다. 특정 제품처럼 그려질 수 있습니다.'});
  }
  if(block.slots&&block.item_count&&block.slots.length!==block.item_count)w.push({key:'slots',message:`글이 ${block.slots.length}줄인데 항목은 ${block.item_count}개입니다. 수가 맞아야 합니다.`});
  if(block.track==='image'&&(!block.gate||block.gate.passed!==true))w.push({key:'gate',message:'그림을 그리는데 왜 그리는지 이유가 없습니다.'});
  return w;
}
function fragments(block:VdfBlock,card:CardKey|null,opt:VdfOptions){if(!card)return[];const t=block.subject_traits||{};const out:string[]=[];if(card==='A'&&t.same_form_variants)out.push('all clearly made from the same base form');if(t.branded_category&&opt.brand==='on')out.push('unbranded, no app icons, no screen content, no brand logos, generic design');if(card==='F'){out.push('everything softly out of focus, shallow depth of field throughout, no sharp object anywhere');if(t.spreads_across_frame)out.push(`the ${opt.emptySide} 55 percent is plain empty wall with no objects`)}return out}
function assemblePrompt(block:VdfBlock,card:CardKey,opt:VdfOptions,rr:RuntimeRules,subjectValue:string):PromptLine[]|null{
  const c=rr.cards[card];if(!c)return null;const extra=fragments(block,card,opt);const subject=subjectValue+(extra.length?`, ${extra.join(', ')}`:'');
  return [{key:'subject',value:subject},{key:'background',value:c.bg},{key:'composition',value:c.cp},{key:'style',value:c.st},{key:'ratio',value:'16:9'},{key:'negative',value:c.ng}];
}
function prompt(block:VdfBlock,card:CardKey|null,opt:VdfOptions,rr:RuntimeRules):PromptLine[]|null{
  if(block.track!=='image'||!card||!block.subject?.trim())return null;
  return assemblePrompt(block,card,opt,rr,block.subject.trim());
}
export function promptPreviewWithEngine(block:VdfBlock,card:CardKey|null,opt:VdfOptions,engine:EngineDef):PromptLine[]|null{
  if(block.track!=='image'||!card)return null;
  const subject=block.subject?.trim()||'[이미지 대상을 입력하세요]';
  return assemblePrompt(block,card,opt,runtimeRules(engine),subject);
}
export function evaluateWithEngine(block:VdfBlock,opt:VdfOptions,engine:EngineDef):BlockEvaluation{
  const rr=runtimeRules(engine);
  const card=(block.track==='image'?(block.card||null):null) as CardKey|null;
  const normalizedBlock=card===block.card?block:{...block,card};
  const infoType=normalizedBlock.info_type;
  const diagramSvg=normalizedBlock.track==='shape'?diagramFor(normalizedBlock,infoType,opt.accent):null;
  const presentationTrack:PresentationTrack=normalizedBlock.track==='image'?'image':diagramSvg?'shape':'text';
  return {block:normalizedBlock,card,infoType,warnings:warnings(normalizedBlock,card,infoType,opt,rr),prompt:prompt(normalizedBlock,card,opt,rr),diagramSvg,presentationTrack};
}
