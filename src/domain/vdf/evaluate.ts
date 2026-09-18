import {INFO_TYPES,RULES} from './rules';
import type {BlockEvaluation,CardKey,PromptLine,VdfBlock,VdfOptions,VdfWarning} from './types';

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
 if(!card)return null; const c=RULES.cards[card]; const extra=fragments(block,card,opt);
 const subject=(block.subject||'')+(extra.length?`, ${extra.join(', ')}`:'');
 return [
  {key:'subject',value:subject},{key:'background',value:c.bg},{key:'composition',value:c.cp},
  {key:'style',value:c.st},{key:'ratio',value:'16:9'},{key:'negative',value:c.ng}
 ];
}

export function evaluateBlock(block:VdfBlock,opt:VdfOptions):BlockEvaluation{
 const card=(block.card||null) as CardKey|null;
 const infoType=block.info_type;
 return {block,card,infoType,warnings:warningFor(block,card,infoType,opt),prompt:buildPrompt(block,card,opt),diagramSvg:diagramFor(block,infoType,opt.accent)};
}

function esc(s:string){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]!))}
function cells(s:string){return String(s).split('|').map(x=>x.trim())}
function svgBox(body:string,h=170){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 ${h}" role="img"><rect width="900" height="${h}" fill="#fff"/>${body}</svg>`}
function text(x:number,y:number,s:string,size=20,anchor='middle'){return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Malgun Gothic, sans-serif" font-size="${size}" fill="#212528">${esc(s)}</text>`}
function rect(x:number,y:number,w:number,h:number,stroke:string,fill='#f6f7f6'){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${stroke}"/>`}

export function diagramFor(block:VdfBlock,infoType:string,accent:string):string|null{
 const slots=block.slots||[]; if(!slots.length||infoType==='정의')return null;
 if(infoType==='목록'||infoType==='분류·계층'){
  const cols=Math.min(slots.length,4), rows=Math.ceil(slots.length/cols), gap=18,pad=24,w=(900-pad*2-gap*(cols-1))/cols,h=90;
  let body=''; slots.forEach((s,i)=>{const x=pad+(i%cols)*(w+gap),y=pad+Math.floor(i/cols)*(h+gap);body+=rect(x,y,w,h,accent)+text(x+w/2,y+52,cells(s)[0]||s,17)});
  return svgBox(body,pad*2+rows*h+(rows-1)*gap);
 }
 if(infoType==='순서·절차'||infoType==='인과·수렴'){
  const n=slots.length,gap=44,pad=24,w=(900-pad*2-gap*(n-1))/n,h=96; let body='';
  slots.forEach((s,i)=>{const x=pad+i*(w+gap);body+=rect(x,30,w,h,accent)+text(x+w/2,85,cells(s)[0]||s,16);if(i<n-1){const ax=x+w+8;body+=`<path d="M${ax} 78 H${ax+gap-16}" stroke="${accent}" stroke-width="3"/><path d="M${ax+gap-24} 70 l10 8 -10 8" fill="none" stroke="${accent}" stroke-width="3"/>`}});
  return svgBox(body,156);
 }
 if(infoType==='비교·대조'){
  const a=cells(slots[0]||''), b=cells(slots[1]||'');
  return svgBox(rect(30,28,390,110,accent)+rect(480,28,390,110,accent)+text(225,58,a[0]||'A',18)+text(675,58,b[0]||'B',18)+text(225,100,a.slice(1).join(' · ')||slots[0],15)+text(675,100,b.slice(1).join(' · ')||slots[1],15),166);
 }
 return null;
}

export function promptText(lines:PromptLine[]){return lines.map(x=>`${x.key}: ${x.value}`).join('\n')}
