import test from 'node:test';
import assert from 'node:assert/strict';
import {getActiveEngine,listEngines} from '../src/services/engineRegistry';

test('built-in VDF 6.0 Stable is always available as fallback',async()=>{const engines=await listEngines();assert.ok(engines.some(e=>e.version==='6.0.0'&&e.source==='BUILT_IN'));const active=await getActiveEngine();assert.equal(active.version,'6.0.0')});
