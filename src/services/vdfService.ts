import {parseEngineResult} from './engineAdapter';
import type {BlockEvaluation,CardKey,InfoType,PresentationTrack,SubjectTraits,VdfBlock,VdfOptions} from '../domain/vdf/types';
import type {EngineDef} from './engineRegistry';
import {evaluateWithEngine} from './engineEvaluation';

export type VdfReviewOverride={
 infoType?:InfoType|string;
 track?:PresentationTrack;
 card?:CardKey|null;
 subject?:string;
 subjectTraits?:Partial<SubjectTraits>;
};


function cleanSubjectPart(value:string){
 return value.replace(/\s*\|\s*/g,': ').replace(/\s+/g,' ').trim();
}

function looksLikeNarrativeOnly(value:string){
 const v=value.trim();
 if(!v)return true;
 if(/[?？]$/.test(v))return true;
 const abstractTail=/(고민|질문|의미|정의|설명|필요성|중요성|목적|학습|정리|결론)$/;
 // Keep relational/object-bearing phrases even when they contain pedagogical words.
 const relationSignal=/(→|\+|·|\/|와 |과 |및 |에서 |으로 )/;
 return abstractTail.test(v)&&!relationSignal.test(v);
}

function visualSubjectPart(value:string){
 const original=value.replace(/\s+/g,' ').trim();
 if(!original||looksLikeNarrativeOnly(original))return '';
 let v=cleanSubjectPart(original);
 // Drop common pedagogical labels while preserving the source phrase that follows.
 v=v.replace(/^(?:핵심 질문|세부 질문|적용 원리|배경|해결안|결과|원인|중간|정리)\s*:\s*/,'');
 // Remove narrative/action tails; retain the concrete entities/states already present in the slot.
 v=v.replace(/\s+(?:방식|원리)\s*(?:을|를)?\s*(?:결합|적용|활용)(?:한다|함|하여|해)?$/,'');
 v=v.replace(/\s+(?:발명|고민|질문|도출|설명)$/,'');
 // When a slot says "X를 결합/대체/적용한 Y", Y is the drawable entity already in the source.
 v=v.replace(/^.+?(?:을|를)\s*(?:결합|대체|적용|활용)한\s+(.+)$/,'$1');
 // Achievement/ordinal modifiers are metadata, not a separate drawable entity.
 v=v.replace(/^(?:최초의|최초)\s+/,'');
 v=v.replace(/\s+/g,' ').trim();
 return looksLikeNarrativeOnly(v)?'':v;
}

function normalizeVisualEntityParts(parts:string[]):string[]{
 const out:string[]=[];const seen=new Set<string>();
 for(const part of parts){
   // Convert source-grounded parallel conjunctions into an explicit entity list.
   // Example: "동전 펀치기와 포도주 압착기" -> two parallel entities.
   const split=part.split(/(?:와|과)\s+|\s+및\s+/).map(x=>x.trim()).filter(Boolean);
   for(const raw of split){
     const entity=raw.replace(/[;,:]+$/,'').trim();
     if(!entity||seen.has(entity))continue;
     seen.add(entity);out.push(entity);
   }
 }
 return out;
}

/**
 * v0.3.2.6 — Visual-entity normalization for professor Shape → Image override.
 * The bootstrap stays source-grounded, but normalizes extracted phrases into a parallel
 * noun/entity list. It does not invent objects, translate content, or add layout language.
 */
export function bootstrapSubjectFromBlock(block:VdfBlock):string{
 const slotParts=(block.slots||[]).map(visualSubjectPart).filter(Boolean);
 const entities=normalizeVisualEntityParts(slotParts).slice(0,5);
 if(entities.length)return entities.join(', ');
 const title=visualSubjectPart(block.title||'');
 return normalizeVisualEntityParts(title?[title]:[]).join(', ');
}

export function analyzePlan(text:string,opt:VdfOptions,engine:EngineDef):BlockEvaluation[]{
 const plan=parseEngineResult(text,engine); return plan.blocks.map(b=>evaluateWithEngine(b,opt,engine));
}
export function reviewEvaluation(base:BlockEvaluation,override:VdfReviewOverride|undefined,opt:VdfOptions,engine:EngineDef):BlockEvaluation{
 const hasCard=!!override&&Object.prototype.hasOwnProperty.call(override,'card');
 const hasSubject=!!override&&Object.prototype.hasOwnProperty.call(override,'subject');
 const explicitTrack=override?.track;
 // v0.3.2.2: Card is image-layout metadata only. It never changes the professor's expression track.
 const requestedTrack:PresentationTrack=explicitTrack??base.presentationTrack;
 const schemaTrack=requestedTrack==='image'?'image':'shape';
 const requestedCard=requestedTrack==='image'?(hasCard?override!.card:(base.block.card??null)):null;
 const subjectTraits={...base.block.subject_traits,...(override?.subjectTraits||{})};
 const inheritedSubject=base.block.subject?.trim()||'';
 const bootstrappedSubject=requestedTrack==='image'&&explicitTrack==='image'&&!hasSubject&&!inheritedSubject
   ? bootstrapSubjectFromBlock(base.block)
   : '';
 const finalSubject=hasSubject?override!.subject!:(inheritedSubject||bootstrappedSubject||null);
 const block={
   ...base.block,
   info_type:(override?.infoType??base.block.info_type) as InfoType,
   track:schemaTrack,
   card:requestedCard,
   subject:finalSubject,
   subject_traits:subjectTraits
 } as VdfBlock;
 let reviewed=evaluateWithEngine(block,opt,engine);
 if(requestedTrack==='text')reviewed={...reviewed,diagramSvg:null,presentationTrack:'text'};
 else reviewed={...reviewed,presentationTrack:requestedTrack};
 const warnings=reviewed.warnings.filter(w=>w.key!=='gate'&&w.key!=='image_subject'&&w.key!=='image_card'&&w.key!=='shape_output');
 if(requestedTrack==='image'){
   if(!reviewed.block.subject?.trim())warnings.push({key:'image_subject',message:'이미지를 선택했지만 이미지 대상(subject)이 비어 있습니다. 대상을 확인해 주세요.'});
   if(!reviewed.card)warnings.push({key:'image_card',message:'이미지를 선택했지만 배치 카드가 없습니다. A~F 중 하나를 선택해 주세요.'});
   if(!reviewed.block.gate||reviewed.block.gate.passed!==true){
     const professorSelected=explicitTrack==='image';
     warnings.push({key:'gate',message:professorSelected?'AI 규칙상 이미지 권장 조건을 충족하지 않았습니다. 교수자가 이미지 사용으로 변경했습니다.':'그림을 그리는데 왜 그리는지 이유가 없습니다.'});
   }
 }else if(requestedTrack==='shape'&&!reviewed.diagramSvg){
   warnings.push({key:'shape_output',message:'도형을 선택했지만 현재 정보 유형에서는 생성할 SVG 도형이 없습니다. 정보 유형 또는 표현 방식을 확인해 주세요.'});
 }
 return {...reviewed,warnings};
}
function splitLongToken(token:string,max:number){const out:string[]=[];for(let i=0;i<token.length;i+=max)out.push(token.slice(i,i+max));return out}
function wrapText(text:string,max:number){const tokens=text.split(/\s+/).filter(Boolean);if(!tokens.length)return[text];const lines:string[]=[];let line='';for(const raw of tokens){const pieces=raw.length>max?splitLongToken(raw,max):[raw];for(const piece of pieces){const next=line?`${line} ${piece}`:piece;if(next.length<=max){line=next;continue}if(line)lines.push(line);line=piece}}if(line)lines.push(line);return lines}
export function presentationSvg(svg:string|null):string|null{if(!svg)return null;const fontStack='Noto Sans KR, Malgun Gothic, Apple SD Gothic Neo, Arial, sans-serif';const normalized=svg.replace(/font-family="[^"]*"/g,`font-family="${fontStack}"`);if(svg.includes('data-vdf-lossless="1"'))return normalized.replace(/<text\s+([^>]*)>([^<]*)<\/text>/g,(_full,attrs,content)=>`<text ${attrs}><tspan>${content}</tspan></text>`);return normalized.replace(/<text\s+([^>]*)>([^<]*)<\/text>/g,(full,attrs:string,content:string)=>{const size=Number(attrs.match(/font-size="([0-9.]+)"/)?.[1]||0);if(size<15||content.length<18)return full;const x=attrs.match(/x="([^"]+)"/)?.[1];if(!x)return full;const y=Number(attrs.match(/y="([^"]+)"/)?.[1]||0);const isComparison=size===15;const maxChars=isComparison?22:size===16?16:14;const lines=content.split(' · ').flatMap((part:string)=>wrapText(part.trim(),maxChars)).filter(Boolean);if(lines.length<2)return full;const lineHeight=size===15?17:18;const total=(lines.length-1)*lineHeight;const startY=Math.max(34,y-total/2+2);let compactAttrs=attrs.replace(/\by="[^"]+"/g,`y="${startY}"`);if(size>=16)compactAttrs=compactAttrs.replace(/font-size="[^"]+"/g,`font-size="${Math.max(13,size-2)}"`);return `<text ${compactAttrs}>${lines.map((line:string,i:number)=>`<tspan x="${x}" dy="${i===0?0:lineHeight}">${line}</tspan>`).join('')}</text>`})}
export async function readTextFile(file:File){return await file.text()}
