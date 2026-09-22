import {renderDiagram as diagramFor} from './diagram';
import {INFO_TYPES,RULES} from './rules';
import type {BlockEvaluation,CardKey,PresentationTrack,PromptLine,VdfBlock,VdfOptions,VdfWarning} from './types';

export function warningFor(block:VdfBlock,card:CardKey|null,infoType:string,opt:VdfOptions):VdfWarning[]{
 const w:VdfWarning[]=[]; const t=block.subject_traits||{};
 if(!INFO_TYPES.includes(infoType as never)) w.push({key:'it',message:`항목 관계 이름은 여섯 개뿐입니다 — ${infoType}`});
 if(card){
  const c=RULES.cards[card];
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

export function fragments(block:VdfBlock,card:CardKey|null,opt:VdfOptions):string[]{
 if(!card)return[]; const t=block.subject_traits||{}; const out:string[]=[];
 if(card==='A'&&t.same_form_variants)out.push('all clearly made from the same base form');
 if(t.branded_category&&opt.brand==='on')out.push('unbranded, no app icons, no screen content, no brand logos, generic design');
 if(card==='F'){
   out.push('everything softly out of focus, shallow depth of field throughout, no sharp object anywhere');
   if(t.spreads_across_frame)out.push(`the ${opt.emptySide} 55 percent is plain empty wall with no objects`);
 }
 return out;
}

export function buildPrompt(block:VdfBlock,card:CardKey|null,opt:VdfOptions):PromptLine[]|null{
 if(block.track!=='image'||!card||!block.subject?.trim())return null; const c=RULES.cards[card]; const extra=fragments(block,card,opt);
 const subject=(block.subject||'')+(extra.length?`, ${extra.join(', ')}`:'');
 return [
  {key:'subject',value:subject},{key:'background',value:c.bg},{key:'composition',value:c.cp},
  {key:'style',value:c.st},{key:'ratio',value:'16:9'},{key:'negative',value:c.ng}
 ];
}

export function evaluateBlock(block:VdfBlock,opt:VdfOptions):BlockEvaluation{
 const card=(block.track==='image'?(block.card||null):null) as CardKey|null;
 const normalizedBlock=card===block.card?block:{...block,card};
 const infoType=normalizedBlock.info_type;
 const diagramSvg=normalizedBlock.track==='shape'?diagramFor(normalizedBlock,infoType,opt.accent):null;
 const presentationTrack:PresentationTrack=normalizedBlock.track==='image'?'image':diagramSvg?'shape':'text';
 return {block:normalizedBlock,card,infoType,warnings:warningFor(normalizedBlock,card,infoType,opt),prompt:buildPrompt(normalizedBlock,card,opt),diagramSvg,presentationTrack};
}

export {renderDiagram as diagramFor} from './diagram';

export function promptText(lines:PromptLine[]){return lines.map(x=>`${x.key}: ${x.value}`).join('\n')}
