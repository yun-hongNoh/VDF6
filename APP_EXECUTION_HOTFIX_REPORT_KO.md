# APP EXECUTION HOTFIX 보고서

이번 HOTFIX 범위의 Acceptance는 PASS이며 App Baseline Freeze 가능하다. Provider/LLM 판단은 재실행하지 않았다. 동결된 12개 Provider JSON과 VdfEvaluation을 그대로 수정 전·후 App에 입력했다. App 실행 성공은 11/12(91.7%)에서 12/12(100%)로 개선됐으며, 이후 런타임 예외는 0건이다.

1. **실제 원인**

비교 renderer는 슬롯의 첫 두 행만 사용했고 두 번째 행이 없는 경우 undefined가 escape 함수로 전달됐다. 목록·분류·순서 renderer는 파이프 첫 칸만 사용해 설명과 명칭을 버렸다. 인과·수렴은 slot 순서만으로 화살표를 연결했으며 미리보기에도 최대 4줄 제한이 있었다.

2. **수정 파일**

기존 제품 파일 변경은 3개다.

- src/domain/vdf/evaluate.ts — SVG 실행을 전용 renderer로 연결. Warning·Card·Image Prompt 로직 유지.
- src/services/vdfService.ts — 이미 줄바꿈한 SVG를 미리보기에서 재절단하지 않음. 기존 미리보기 4줄 제한 제거. Adapter·Override·Subject bootstrap 유지.
- src/features/checker/ResultDetails.tsx — 기존 판단 근거 펼침 영역에 item_structure와 전체 slot 원문을 추가. text/image 블록도 원문을 확인할 수 있음.

추가 제품 파일은 src/domain/vdf/diagram.ts 한 개다. 테스트 tests/appExecution.test.ts, 동결 fixture 36개, 재처리 scripts/replay-app-execution.ts 및 docs의 검증 결과를 추가했다. 전체 파일과 SHA-256은 HOTFIX_FILE_AUDIT.json에 기록한다. 기존 P0 테스트 파일과 package.json/package-lock.json은 변경하지 않았다. UI 전체 구조·내비게이션·교수자 조정 UI는 유지했다.

3. **비교 1행 오류 수정**

비교 slot을 각각 독립 행으로 렌더링하여 두 번째 slot을 가정하지 않는다. 0행은 기존 text fallback, 빈 문자열은 안전한 빈 행으로 처리하며 1행·2행·30행을 검증했다. 기존 B01 A B6 입력은 수정 전 같은 TypeError가 재현되고 수정 후 정상 처리됐다.

4. **SVG 정보 손실 수정**

slot 문자열 전체를 보존한다. 번호, 명칭, 설명, A/B 값, 하위항목과 구분 기호를 제거하지 않는다. 줄 수에 따라 행 높이와 SVG viewBox 높이를 늘리고 공백 경계를 우선해 줄바꿈한다. 긴 단어도 삭제 없이 줄바꿈하며 각 행 title에도 원문을 둔다. 항목 구조는 상단에 그대로 표시한다. 비교의 행을 두 대조 대상처럼 재해석하지 않는다.

81개 SVG의 눈에 보이는 text를 추출해 원본 slots와 대조했다. Review 미리보기와 Production 원본 SVG 모두 항목 전체가 일치했다(표시용 줄바꿈 개행은 제외). 태그·특수문자 escape, 긴 문장, 다수 항목도 검증했다. 정의 블록은 기존 text track을 유지하며 전체 원문은 Review의 판단 근거에서 확인한다. 자동 요약·조용한 truncate는 없다.

5. **병렬 수렴 관계 표현 수정**

순서·절차는 해당 info_type이 명시한 순서대로 연결한다. 인과·수렴은 item_structure가 실제 slot 라벨을 정확하고 유일하게 참조하는 명시식일 때만 연결한다. 예를 들어 A + B → C, A → B + C, A → B → C는 각각 수렴·분기·선형 연결로 표시한다. 모든 라벨이 전체 slots와 일치해야 하며 중복·미지정·불완전한 참조에는 화살표를 그리지 않는다. 이는 App의 선언된 구조 표현이며 Engine의 새 판단 규칙이나 info_type 추가가 아니다.

Frozen 구텐베르크 A/B의 item_structure는 일반적인 원인 → 중간 → 결과 템플릿이라 각 실물의 역할을 확정하지 않는다. 따라서 두 Run 모두 화살표 없는 중립 행 표현을 사용하고, 동전 펀치기·포도주 압착기·금속 활자 인쇄기와 결합 설명을 전부 남긴다. 결합 관계를 임의로 복구한 그림이라고 주장하지 않는다. 정보가 모호하면 새 관계를 추론하지 않는 것이 이번 HOTFIX의 보존 기준이다.

6. **Frozen Benchmark 12 Run 재처리 결과**

| Case | Run | Contract | App before | App after | Runtime exception after |
|---|---|---|---|---|---|
| B01 | A | PASS | FAIL | PASS | 0 |
| B01 | B | PASS | PASS | PASS | 0 |
| B02 | A | PASS | PASS | PASS | 0 |
| B02 | B | PASS | PASS | PASS | 0 |
| B03 | A | PASS | PASS | PASS | 0 |
| B03 | B | PASS | PASS | PASS | 0 |
| B04 | A | PASS | PASS | PASS | 0 |
| B04 | B | PASS | PASS | PASS | 0 |
| B05 | A | PASS | PASS | PASS | 0 |
| B05 | B | PASS | PASS | PASS | 0 |
| B06 | A | PASS | PASS | PASS | 0 |
| B06 | B | PASS | PASS | PASS | 0 |

수정 전 성공 11회는 기존 Frozen App 결과와 deep equality가 일치했다. 실패 1회는 기존 예외 문자열이 일치했다. 수정 후에는 12회 모두 Contract와 block 데이터가 동결 VdfEvaluation과 일치했다. 기존 성공 11회의 SVG 외 결과(Track·Subject·Traits·Card·Warning·Prompt 등)는 변경 전후 완전히 동일했다. 새로 성공한 B01 A도 원래 block을 그대로 보존한다.

docs/app-execution-replay/각 Case/run_A 또는 run_B에 before.json, after.json, checks.json, Review/Production SVG를 제공한다. summary.json은 전체 재처리 결과, gallery.html은 대표 5개 SVG를 모아 확인하는 문서다. Browser에서 B01 A의 14블록·11도형·Warning 0 처리와 정의 블록의 원문 표시를 직접 확인했다(HOTFIX_BROWSER_REVIEW.txt). 비교 1행과 MAE/MSE/RMSE/MAPE를 포함한 SVG 갤러리도 확인했다.

7. **App 성공률 before / after**

11/12 → 12/12. Runtime exception 1 → 0. Contract 12/12 PASS 유지. 이는 같은 Frozen 입력에서 App 처리만 비교한 결과이며 Engine의 새로운 판단 성능 측정이 아니다.

8. **기존 Regression 결과**

npm ci 성공. npm test 72/72 PASS(기존 49 + 신규 23). npm run build 성공(TypeScript + Vite). 최종 로그는 docs/HOTFIX_TEST_RESULTS_FINAL.txt와 HOTFIX_BUILD_RESULTS_FINAL.txt다. 의존성은 잠금 파일대로 유지했다. 빌드의 500 kB chunk 안내는 남아 있으며 빌드 실패는 없다.

기존 49개에는 Professor Override, Track, Subject, Traits, Card A~F, Gate Warning, Image Prompt 6줄, Engine 6.0/6.1 package 전환, Adapter, Prompt Bridge 검증이 포함된다. 신규 23개는 비교 0/빈/1/2/30행, 순서의 이름·설명, 긴 텍스트, 수렴·분기·선형 명시 관계, 불명확 관계 fallback, Frozen 12 Run을 검증한다. 기존 테스트는 수정하지 않았다.

9. **Engine / Contract 변경 여부**

Engine 6.0 rules·instruction, Engine 6.1, Contract v1 schema, info_type 6종, traits 5종, R4/R9, Card와 canonical Prompt는 변경하지 않았다. Stable rules SHA-256은 c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5로 동일하다. P0 원본 138개 파일과 동결 Benchmark 303개 파일 및 Evidence ZIP 무결성을 확인했다. 수정본에서도 허용한 제품 파일 3개 외 P0 기존 파일 135개는 원본 해시와 같다. Frozen Provider/Ground Truth/기존 보고서는 변경하지 않았다. Engine 6.2는 만들지 않았다.

10. **HOTFIX Freeze 가능 여부**

가능하다. 이번 HOTFIX의 비교 안정성·slot 보존·임의 순차화 방지·기존 회귀·동결 보호 기준을 통과했다. 인과·수렴의 연결 정보가 불명확한 경우 중립 표현을 사용한다는 동작을 기준으로 고정한다. 긴 내용은 정보 보존을 위해 SVG가 세로로 길어질 수 있다. 이 변경은 기존 Engine 판단의 Visual Necessity 문제나 Provider의 오판을 교정하지 않는다.
