import {parsePlanText} from '../domain/vdf/parse';
import type {BlockEvaluation,CardKey,InfoType,VdfBlock,VdfOptions} from '../domain/vdf/types';
import type {EngineDef} from './engineRegistry';
import {evaluateWithEngine} from './engineEvaluation';

export type VdfReviewOverride={infoType?:InfoType|string;card?:CardKey|null};

export function analyzePlan(text:string,opt:VdfOptions,engine:EngineDef):BlockEvaluation[]{
 const plan=parsePlanText(text); return plan.blocks.map(b=>evaluateWithEngine(b,opt,engine));
}
export function reviewEvaluation(base:BlockEvaluation,override:VdfReviewOverride|undefined,opt:VdfOptions,engine:EngineDef):BlockEvaluation{
 const hasCard=!!override&&Object.prototype.hasOwnProperty.call(override,'card');
 const block={...base.block,info_type:(override?.infoType??base.block.info_type) as InfoType,card:hasCard?override!.card:(base.block.card??null)} as VdfBlock;
 return evaluateWithEngine(block,opt,engine);
}
function splitLongToken(token:string,max:number){const out:string[]=[];for(let i=0;i<token.length;i+=max)out.push(token.slice(i,i+max));return out}
function wrapText(text:string,max:number){const tokens=text.split(/\s+/).filter(Boolean);if(!tokens.length)return[text];const lines:string[]=[];let line='';for(const raw of tokens){const pieces=raw.length>max?splitLongToken(raw,max):[raw];for(const piece of pieces){const next=line?`${line} ${piece}`:piece;if(next.length<=max){line=next;continue}if(line)lines.push(line);line=piece}}if(line)lines.push(line);return lines}
export function presentationSvg(svg:string|null):string|null{if(!svg)return null;const fontStack='Noto Sans KR, Malgun Gothic, Apple SD Gothic Neo, Arial, sans-serif';const normalized=svg.replace(/font-family="[^"]*"/g,`font-family="${fontStack}"`);return normalized.replace(/<text\s+([^>]*)>([^<]*)<\/text>/g,(full,attrs:string,content:string)=>{const size=Number(attrs.match(/font-size="([0-9.]+)"/)?.[1]||0);if(size<15||content.length<18)return full;const x=attrs.match(/x="([^"]+)"/)?.[1];if(!x)return full;const y=Number(attrs.match(/y="([^"]+)"/)?.[1]||0);const isComparison=size===15;const maxChars=isComparison?22:size===16?16:14;const lines=content.split(' · ').flatMap((part:string)=>wrapText(part.trim(),maxChars)).filter(Boolean).slice(0,4);if(lines.length<2)return full;const lineHeight=size===15?17:18;const total=(lines.length-1)*lineHeight;const startY=Math.max(34,y-total/2+2);let compactAttrs=attrs.replace(/y="[^"]+"/g,`y="${startY}"`);if(size>=16)compactAttrs=compactAttrs.replace(/font-size="[^"]+"/g,`font-size="${Math.max(13,size-2)}"`);return `<text ${compactAttrs}>${lines.map((line:string,i:number)=>`<tspan x="${x}" dy="${i===0?0:lineHeight}">${line}</tspan>`).join('')}</text>`})}
export async function readTextFile(file:File){return await file.text()}
