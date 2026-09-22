import Ajv, {type ValidateFunction} from 'ajv';
import schema from './vdf-evaluation-v1.schema.json';
import type {VdfBlock} from '../domain/vdf/types';

/** Engine judgment only. SVG/prompt rendering and professor overrides remain App execution. */
export type VdfEvaluation = {
  contractVersion:'1.0';
  engine:{id:string;version:string};
  blocks:VdfBlock[];
};
export const EVALUATION_SCHEMA = schema;
export const PLAN_SCHEMA = {
  $schema:schema.$schema, title:'VDF provider blocks output', type:'object',
  required:['blocks'], additionalProperties:false,
  properties:{blocks:schema.properties.blocks}, definitions:schema.definitions
};
export const BLOCK_KEYS = Object.keys(schema.definitions.block.properties);
export const REQUIRED_BLOCK_KEYS = schema.definitions.block.required;

const ajv = new Ajv({allErrors:true,strict:true,addUsedSchema:false});
const validators = new WeakMap<object,ValidateFunction>();
export function schemaValidator(value:object):ValidateFunction{
  let validate=validators.get(value);
  if(!validate){validate=ajv.compile(value);validators.set(value,validate)}
  return validate;
}
export function assertSchema(value:unknown,definition:object,label:string):void{
  const validate=schemaValidator(definition);
  if(!validate(value))throw new Error(`${label}: ${ajv.errorsText(validate.errors,{separator:'; '})}`);
}
export function assertVdfEvaluation(value:unknown):asserts value is VdfEvaluation{
  assertSchema(value,EVALUATION_SCHEMA,'VdfEvaluation Contract v1');
}
