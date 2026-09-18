import type {CardKey,Gate,InfoType,SubjectTraits,Track,VdfBlock,VdfPlan,VdfSplit} from './types';

const INFO_TYPES:InfoType[]=['순서·절차','분류·계층','비교·대조','인과·수렴','정의','목록'];
const TRACKS:Track[]=['image','shape'];
const CARDS:CardKey[]=['A','B','C','D','E','F'];
const BLOCK_KEYS=new Set(['id','title','track','info_type','item_count','item_structure','slots','gate','card','subject','subject_traits','split']);
const TRAIT_KEYS=['branded_category','same_form_variants','replacement_type','scale_is_the_point','spreads_across_frame'] as const;

function isRecord(v:unknown):v is Record<string,unknown>{return !!v&&typeof v==='object'&&!Array.isArray(v)}
function fail(message:string):never{throw new Error(message)}
function str(v:unknown,label:string){if(typeof v!=='string')fail(`${label}은 문자열이어야 합니다`);return v}
function int(v:unknown,label:string){if(!Number.isInteger(v)||Number(v)<0)fail(`${label}은 0 이상의 정수여야 합니다`);return Number(v)}
function strArray(v:unknown,label:string){if(!Array.isArray(v)||v.some(x=>typeof x!=='string'))fail(`${label}은 문자열 배열이어야 합니다`);return v as string[]}

function parseGate(v:unknown,label:string):Gate{
  if(v===null)return null;
  if(!isRecord(v)||typeof v.passed!=='boolean'||typeof v.reason!=='string')fail(`${label}은 null 또는 {passed:boolean, reason:string}이어야 합니다`);
  return {passed:v.passed as boolean,reason:v.reason as string};
}
function parseTraits(v:unknown,label:string):SubjectTraits{
  if(!isRecord(v))fail(`${label}이 없습니다`);
  const extras=Object.keys(v).filter(k=>!TRAIT_KEYS.includes(k as never));
  if(extras.length)fail(`${label}에 VDF 규칙에 없는 속성이 있습니다: ${extras.join(', ')}`);
  const out={} as SubjectTraits;
  for(const key of TRAIT_KEYS){if(typeof v[key]!=='boolean')fail(`${label}.${key}는 true/false여야 합니다`);out[key]=v[key] as boolean}
  return out;
}
function parseSplit(v:unknown,label:string):VdfSplit[]|undefined{
  if(v===undefined)return undefined;
  if(!Array.isArray(v))fail(`${label}은 배열이어야 합니다`);
  return v.map((x,i)=>{
    if(!isRecord(x))fail(`${label}[${i}] 형식이 잘못되었습니다`);
    return {id:str(x.id,`${label}[${i}].id`),title:str(x.title,`${label}[${i}].title`),item_count:int(x.item_count,`${label}[${i}].item_count`),slots:strArray(x.slots,`${label}[${i}].slots`),subject:x.subject==null?null:str(x.subject,`${label}[${i}].subject`)};
  });
}
function parseBlock(v:unknown,index:number):VdfBlock{
  const label=`blocks[${index}]`;
  if(!isRecord(v))fail(`${label} 형식이 잘못되었습니다`);
  const extras=Object.keys(v).filter(k=>!BLOCK_KEYS.has(k));
  if(extras.length)fail(`${label}에 공식 VDF 2부 JSON에 없는 키가 있습니다: ${extras.join(', ')}. VDF6_지시문의 JSON 형식을 그대로 사용해 주세요.`);
  if('information_type' in v)fail(`${label}.information_type 대신 공식 키 info_type을 사용해야 합니다`);
  if('background_layer' in v)fail(`${label}.background_layer는 공식 2부 JSON 키가 아닙니다. card/subject/gate 구조를 사용해야 합니다`);
  if('rationale' in v)fail(`${label}.rationale 대신 공식 구조의 gate.reason과 1부 근거를 사용해야 합니다`);
  const track=str(v.track,`${label}.track`) as Track;if(!TRACKS.includes(track))fail(`${label}.track은 image 또는 shape여야 합니다`);
  const info=str(v.info_type,`${label}.info_type`) as InfoType;if(!INFO_TYPES.includes(info))fail(`${label}.info_type은 VDF 6종 중 하나여야 합니다`);
  const card=v.card===null?null:str(v.card,`${label}.card`) as CardKey;if(card!==null&&!CARDS.includes(card))fail(`${label}.card는 A~F 또는 null이어야 합니다`);
  const subject=v.subject===null?null:str(v.subject,`${label}.subject`);
  return {
    id:str(v.id,`${label}.id`),title:str(v.title,`${label}.title`),track,info_type:info,
    item_count:int(v.item_count,`${label}.item_count`),
    item_structure:v.item_structure===undefined?undefined:str(v.item_structure,`${label}.item_structure`),
    slots:strArray(v.slots,`${label}.slots`),gate:parseGate(v.gate,`${label}.gate`),card,subject,
    subject_traits:parseTraits(v.subject_traits,`${label}.subject_traits`),split:parseSplit(v.split,`${label}.split`)
  };
}
function jsonCandidates(text:string):string[]{
  const out:string[]=[];
  for(const m of text.matchAll(/```json\s*([\s\S]*?)```/gi))out.push(m[1].trim());
  for(const m of text.matchAll(/```\s*([\s\S]*?)```/g))if(m[1].includes('"blocks"'))out.push(m[1].trim());
  const pos=text.indexOf('{');if(pos>=0)out.push(text.slice(pos).trim());
  return [...new Set(out)];
}
export function parsePlanText(text:string):VdfPlan{
  let last:unknown=null;
  for(const candidate of jsonCandidates(text)){
    try{
      const data=JSON.parse(candidate) as unknown;
      if(!isRecord(data)||!Array.isArray(data.blocks))continue;
      const top=Object.keys(data).filter(k=>k!=='blocks');
      if(top.length)fail(`공식 VDF 2부 JSON의 최상위 키는 blocks만 사용합니다. 추가 키: ${top.join(', ')}`);
      return {blocks:data.blocks.map(parseBlock)};
    }catch(e){last=e}
  }
  if(last instanceof Error)throw last;
  throw new Error('공식 VDF 2부 JSON을 찾지 못했습니다');
}
