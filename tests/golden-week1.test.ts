import test from 'node:test';
import assert from 'node:assert/strict';
import {VDF_INSTRUCTION_MARKDOWN} from '../src/generated/vdfKnowledge';

const expected=[
 ['B1 공학의 본질','정의','카드 B — 캡슐 커피머신'],
 ['B2 과학자 vs 공학자','비교·대조','없음'],
 ['B3 시대별 역량','비교·대조','없음'],
 ['B4 실무 소양','목록','없음'],
 ['B5 창의성의 오해','정의','카드 B — 하늘 나는 차'],
 ['B6 창의 실용','정의','카드 C — 우회 경로 대조'],
 ['B7 창의성 4단계','순서·절차','없음']
] as const;

test('original week1 lesson1 golden regression target is preserved byte-for-content in bundled instruction source',()=>{
  assert.match(VDF_INSTRUCTION_MARKDOWN,/## 1차 테스트/);
  for(const row of expected){
    const line=`| ${row[0]} | ${row[1]} | ${row[2]} |`;
    assert.ok(VDF_INSTRUCTION_MARKDOWN.includes(line),`missing golden row: ${line}`);
  }
  assert.equal(expected.length,7);
});
