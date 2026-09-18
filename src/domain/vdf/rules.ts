import raw from './rules.json';
import type {CardKey,InfoType} from './types';

type RawCard={
  ko:string;element_cap:number|null;model:{primary:string}|string;status:string;
  prompt:{background:string;composition:string;style:string;negative:string;subject_example?:string};
  use_when?:string[];do_not_use_when?:string[];representative?:string[];
};
type RawRules={cards:Record<CardKey,RawCard>;info_types:Record<string,{ko?:InfoType}>};
export type CardRule={ko:string;cap:number|null;model:string;status:string;bg:string;cp:string;st:string;ng:string;ex:string;rep?:string};
const source=raw as unknown as RawRules;
export const INFO_TYPES=Object.values(source.info_types).map(v=>v?.ko).filter(Boolean) as InfoType[];
export const RULES={
  cards:Object.fromEntries(Object.entries(source.cards).map(([key,c])=>[key,{
    ko:c.ko,cap:c.element_cap,model:typeof c.model==='string'?c.model:c.model.primary,status:c.status,
    bg:c.prompt.background,cp:c.prompt.composition,st:c.prompt.style,ng:c.prompt.negative,ex:c.prompt.subject_example||'',rep:c.representative?.[0]||''
  }])) as Record<CardKey,CardRule>,
  info_types:INFO_TYPES
};
export const CARD_KEYS=Object.keys(RULES.cards) as CardKey[];
