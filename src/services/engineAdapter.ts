import {BLOCK_KEYS,REQUIRED_BLOCK_KEYS,assertSchema,assertVdfEvaluation,schemaValidator,type VdfEvaluation} from '../contracts/vdfEvaluation';
import type {EngineDef} from './engineRegistry';

type FieldMapping={path:string;values?:Record<string,unknown>};
export type EngineAdapter =
  | {kind:'identity';contract_version:'1.0'}
  | {kind:'projection';contract_version:'1.0';blocks_path:string;fields:Record<string,FieldMapping>};
export const IDENTITY_ADAPTER:EngineAdapter={kind:'identity',contract_version:'1.0'};
function record(value:unknown):value is Record<string,unknown>{return !!value&&typeof value==='object'&&!Array.isArray(value)}
function own(value:object,key:string){return Object.prototype.hasOwnProperty.call(value,key)}
function pointerParts(path:string):string[]{
  if(path!==''&&!/^\/(?:[^~]|~[01])*$/.test(path))throw new Error(`Invalid adapter JSON pointer: ${path}`);
  const parts=path===''?[]:path.slice(1).split('/').map(x=>x.replace(/~1/g,'/').replace(/~0/g,'~'));
  if(parts.some(x=>['__proto__','prototype','constructor'].includes(x)))throw new Error('Unsafe adapter path');
  return parts;
}
function at(value:unknown,path:string):unknown{
  for(const key of pointerParts(path)){
    if(!value||typeof value!=='object'||!own(value,key))return undefined;
    value=(value as Record<string,unknown>)[key];
  }
  return value;
}
export function validateAdapter(value:unknown):asserts value is EngineAdapter{
  if(!record(value)||value.contract_version!=='1.0')throw new Error('Adapter requires Contract v1 (1.0)');
  const keys=value.kind==='identity'?['kind','contract_version']:['kind','contract_version','blocks_path','fields'];
  if(Object.keys(value).some(k=>!keys.includes(k)))throw new Error('Unsupported adapter option: declarative mappings only');
  if(value.kind==='identity')return;
  if(value.kind!=='projection'||typeof value.blocks_path!=='string'||!record(value.fields))throw new Error('Unsupported declarative adapter');
  pointerParts(value.blocks_path);
  if(REQUIRED_BLOCK_KEYS.some(k=>!own(value.fields as object,k)))throw new Error('Adapter must map every required Contract v1 block field');
  for(const [key,mapping] of Object.entries(value.fields)){
    if(!BLOCK_KEYS.includes(key)||!record(mapping)||typeof mapping.path!=='string'||Object.keys(mapping).some(k=>!['path','values'].includes(k)))throw new Error(`Invalid adapter field: ${key}`);
    pointerParts(mapping.path);
    if(mapping.values!==undefined&&!record(mapping.values))throw new Error(`Invalid adapter values: ${key}`);
  }
}
export function validateOutputSchema(value:unknown):asserts value is Record<string,unknown>{
  if(!record(value)||value.type!=='object')throw new Error('output.schema.json must declare an object schema');
  // No network resolution, custom executable keywords, or asynchronous validators.
  const walk=(node:unknown):void=>{
    if(Array.isArray(node)){node.forEach(walk);return}
    if(!record(node))return;
    if(node.$async!==undefined)throw new Error('Async schemas are not supported');
    if(typeof node.$ref==='string'&&!node.$ref.startsWith('#/'))throw new Error('Only local schema references are supported');
    Object.values(node).forEach(walk);
  };
  walk(value);schemaValidator(value);
}

/** All provider/internal taxonomy ends here. No engine-supplied JavaScript is loaded. */
export function adaptEngineResult(input:unknown,engine:EngineDef):VdfEvaluation{
  assertSchema(input,engine.outputSchema,`${engine.version} output schema`);
  const adapter=engine.adapter;
  let blocks:unknown;
  if(adapter.kind==='identity')blocks=(input as {blocks:unknown}).blocks;
  else{
    const items=at(input,adapter.blocks_path);
    if(!Array.isArray(items))throw new Error('Adapter blocks_path must resolve to an array');
    blocks=items.map(item=>{
      const block:Record<string,unknown>={};
      for(const [key,mapping] of Object.entries(adapter.fields)){
        let value=at(item,mapping.path);
        if(value===undefined){if(REQUIRED_BLOCK_KEYS.includes(key))throw new Error(`Adapter missing field: ${key}`);continue}
        if(mapping.values){
          if((typeof value!=='string'&&typeof value!=='number'&&typeof value!=='boolean'&&value!==null)||!own(mapping.values,String(value)))throw new Error(`Adapter unmapped value for ${key}: ${String(value)}`);
          value=mapping.values[String(value)];
        }
        block[key]=value;
      }
      return block;
    });
  }
  const result={contractVersion:'1.0',engine:{id:engine.id,version:engine.version},blocks};
  assertVdfEvaluation(result);
  // App reviews must not mutate the provider result or package mapping values.
  return JSON.parse(JSON.stringify(result)) as VdfEvaluation;
}
export function parseEngineResult(text:string,engine:EngineDef):VdfEvaluation{
  const candidates=[...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/gi)].map(m=>m[1].trim());
  const start=text.indexOf('{');if(start>=0)candidates.push(text.slice(start).trim());
  let last:unknown;
  for(const candidate of new Set(candidates)){
    try{return adaptEngineResult(JSON.parse(candidate),engine)}catch(error){last=error}
  }
  throw last instanceof Error?last:new Error('Engine JSON 결과를 찾지 못했습니다');
}
