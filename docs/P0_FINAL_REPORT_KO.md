# Engine Package Contract Hardening — P0 결과

기준: `VDF_Next_Starter_v0.3.2.6_Visual_Entity_Normalization_HOTFIX.zip`

원본 ZIP SHA-256: `bad79c0466375093426037f4ae880c312a7700a0501d19b146342ea908484cf9`

지정한 파일을 로컬 Downloads에서 확보한 뒤 원본 보존 사본과 작업 사본을 분리했다. 프로젝트 `sources/`는 비어 있었고 수정하지 않았다. 참조 채팅에서 실제로 조회된 첨부는 더 오래된 v0.3.1.1이어서 작업 기준으로 사용하지 않았다.

**판정: P0 소프트웨어 계약·연결·실행 호환성 PASS. Contract v1 Freeze 가능.** Engine 6.0 Stable과 6.1 Experimental의 판단 규칙은 그대로 유지했다. 외부 LLM 의미 판단 성능이나 6.1 Stable 승격을 검증한 것은 아니다.

## 1. 실제 변경 파일

기존 파일 수정 10개:

| 파일 | 변경 내용 |
|---|---|
| `package.json` | JSON Schema 검증용 Ajv, 저장소 테스트용 fake-indexeddb, 엔진 패키징 명령 추가. App 버전 유지 |
| `src/services/engineRegistry.ts` | v1 package 검증, legacy 호환, schema/adapter 로드·보관·내보내기, Stable 보호, active 패키지 덮어쓰기 방지, 고정 fallback |
| `src/services/promptBridge.ts` | 선택 패키지의 rules.json/output schema 추가, instruction/rules 출처 일치 검사 |
| `src/services/vdfService.ts` | 입력을 명시적 Adapter 경유로 변경. 원본 SVG 글꼴 속성 손상 버그 최소 수정 |
| `src/features/checker/PromptBridge.tsx` | 엔진 변경 시 이전 Prompt와 진행 중 생성 결과 무효화 |
| `src/features/checker/CheckerPage.tsx` | 결과 엔진의 카드 규칙을 기존 검토/근거 컴포넌트에 전달 |
| `src/features/checker/DecisionReview.tsx` | 고정 공개 enum + 전달받은 결과 엔진 카드 데이터 사용 |
| `src/features/checker/ResultDetails.tsx` | 결과 엔진 카드 데이터 사용. 원본 TypeScript 빌드 오류 제거 |
| `tests/promptBridge.test.ts` | 기존 테스트 객체에 실제 schema/adapter 필드 추가 |
| `tests/review.test.ts` | 원본과 맞지 않던 13px 기대값을 기존 비교 SVG의 15px로 수정하고 글꼴 보존 검증 추가 |

신규 구현/검증 파일:

- `src/contracts/vdf-evaluation-v1.schema.json`
- `src/contracts/vdfEvaluation.ts`
- `src/contracts/constants.ts`
- `src/services/engineAdapter.ts`
- `tests/packageContract.test.ts`
- `scripts/package-engines.ts`
- `package-lock.json`

신규 문서/산출물:

- `docs/ENGINE_CONTRACT_V1.md`
- `docs/P0_FINAL_REPORT_KO.md`
- `docs/P0_BROWSER_RESULTS.md`
- `docs/P0_TEST_RESULTS.txt`
- `docs/P0_BUILD_RESULTS.txt`
- `docs/P0_FILE_AUDIT.json`
- `engine-packages/VDF_Engine_6.0.0_Contract_v1.zip`
- `engine-packages/VDF_Engine_6.1.0-experimental.1_Contract_v1.zip`

삭제 파일 없음. 수정 전/후 파일 해시는 `P0_FILE_AUDIT.json` 참조. 원본 Engine 규칙·지시문·실험 디렉터리·CSS·화면 구성은 보존했다.

## 2. 기존 Engine Registry 구조

실제 소스는 이미 다음 구조였다.

```text
6.0 built-in generated instruction / Markdown / rules.json / fixtures
외부 ZIP → registerEnginePackage → IndexedDB(vdf-engine-registry/engines)
별도 활성화 → localStorage(vdf.activeEngine) → vdf-engine-change
getActiveEngine → Prompt Bridge / Checker
```

지시문의 가정과 다른 점:

- Active Engine의 instruction과 규칙 Markdown은 **이미** 판단 Prompt에 연결돼 있었다.
- `evaluateWithEngine()`도 선택 엔진의 rulesJson에서 Card 규칙을 읽고 있었다. 모든 경로가 전역 rules.json에 묶여 있던 것은 아니다.
- 반면 rules.json 자체와 output schema는 판단 Prompt에서 빠져 있었고, 입력은 고정 `parsePlanText()`로 바로 들어갔다.
- `contract.json`은 키 목록을 설명하는 메타데이터였다. 실제 JSON Schema validator나 명시적 Adapter는 없었다.
- 검토 카드 표시와 근거 일부는 6.0 전역 카드 데이터를 읽었다.
- 실제 provider track은 `image | shape`이다. `text`는 App의 presentationTrack/교수자 Override 상태다.
- ZIP의 package.json은 0.3.2.6이지만 release banner는 v0.3.2.1 / Engine 6.0.0으로 고정돼 있다. UI 변경 범위를 늘리지 않고 원본 표기를 유지했다. 실제 Active 표시/Prompt/결과 엔진 표시는 선택에 따라 바뀐다.

## 3. 새 Engine Package 구조

```text
manifest.json                 package_contract_version=1.0
                              evaluation_contract_version=1.0
rules.json                    해당 엔진의 사실원천
VDF6_지시문.md                 judgment instruction
VDF6_규칙.md                   규칙 설명
contract.json                 기존 provider metadata, version=6.0 유지
output.schema.json            provider JSON Schema
adapter.json                  identity 또는 선언형 projection
evaluation.schema.json        공통 Contract v1 schema
regression/<case>/             input.md / expected.json / README.md
```

6.0은 기존 bundle 원본으로 구성하고 6.1은 원본 실험 패키지를 v1 메타데이터로 포장한다. 둘 다 fixtures 4개를 포함한다. 6.1 보조 문서와 내부 IR 명세도 보존한다. UI의 기존 ZIP 등록 기능으로 사용한다. 6.1을 기본 bundle에 활성 엔진으로 삽입하지 않는다.

한 ZIP 안에서 manifest 위치를 기준으로 파일을 찾고 서로 다른 별칭 내용, 불완전 fixture, 지원하지 않는 계약, 실행 파일을 거부한다. Engine 6.0은 덮어쓰기/삭제 불가이며 활성 패키지도 덮어쓰기/삭제할 수 없다.

6.0 ZIP은 보관/배포용으로 제공한다. 현재 App에는 이미 보호된 동일 6.0이 내장돼 있으므로 재등록하면 의도적으로 거부된다.

## 4. Contract v1 schema

정식 명세: `src/contracts/vdf-evaluation-v1.schema.json`

```ts
type VdfEvaluation = {
  contractVersion: '1.0';
  engine: { id: string; version: string };
  blocks: VdfBlock[];
};
```

blocks 필수: `id/title/track/info_type/item_count/slots/gate/card/subject/subject_traits`.

선택: `item_structure/split`. 공개 info_type 6종, Card A~F, 기존 trait 5개를 유지한다. track은 기존 `image/shape`, Gate는 null 또는 boolean passed와 string reason, subject는 string/null이다. 추가 키와 타입 오류는 거부한다. JSON Schema draft-07로 입력·변환 결과를 모두 검증한다.

이 계약은 **Engine 판단 → App 실행** 경계다. 기존 `BlockEvaluation`의 SVG/Prompt/warnings/presentationTrack은 App 실행 결과로 유지한다. provider `contract.json`의 기존 6.0 버전과 새 평가 계약 1.0은 다른 버전 축이다.

## 5. Adapter 위치

`src/services/engineAdapter.ts`

```text
AI/provider JSON
→ 선택 Engine output schema 검증
→ adapter.json에 따른 변환
→ VdfEvaluation v1 검증
→ 기존 evaluateWithEngine
→ 교수자 Override / SVG / 6줄 Prompt
```

6.0/6.1은 같은 기존 Final JSON을 내므로 identity adapter를 사용한다. 내부 표현이 다른 미래 패키지는 JSON Pointer 필드 매핑과 명시적 enum 매핑을 사용한다. 테스트 전용 패키지로 `mode=object/diagram`을 공개 image/shape로 변환해 App 변경 없이 같은 결과를 내는 것을 검증했다. 이는 신규 엔진 판단 규칙이 아니다.

외부 JavaScript를 실행하는 hook은 없다. 함수/모듈 주입, async/원격 schema, prototype 경로를 지원하지 않는다. 내부 pipeline/trace는 공통 결과에 전달하지 않는다.

Visual Entity 판단은 Engine의 subject 출력에 남고, Adapter는 판단을 추가하지 않는다. 기존 title/slots에서 대상을 정리하는 App bootstrap은 교수자의 명시적 Image Override 때만 동작하도록 기존 구조를 유지했다.

## 6. Prompt Bridge와 Active Engine 연결

`createVdfBridgePrompt()`가 `getActiveEngine()`에서 패키지를 가져와 instruction·Markdown·rules.json·output.schema.json을 한 요청으로 조립한다. 고정 6.0 지시문을 강제하지 않는다. frozen rules.json의 설명용 output_contract와 실제 응답 schema의 차이는 명시적으로 설명한다.

엔진/등록 정보 변경 시 화면의 이전 Prompt를 지우고 진행 중 생성도 무효화한다. 검사 결과는 해당 `resultEngine` 스냅샷을 유지해 교수자 검토에 사용한다. 카드 표시와 검증 상태 역시 그 결과 엔진의 카드 규칙을 따른다.

## 7. 6.0/6.1 전환 테스트 결과

**자동 검증 + 실제 브라우저 검증 PASS.**

| 검증 | 결과 |
|---|---|
| 등록과 활성화 분리 | 6.1 등록 후 6.0 유지 |
| 6.0 → 6.1 → 새로고침 | 6.1 선택 유지 |
| 실제 판단 Prompt | 6.1에서 Semantic Boundary instruction/rules가 포함됨 |
| 출력 schema | 선택 패키지의 JSON Schema가 Prompt와 수신 검증에 사용됨 |
| 공통 평가 계약 | 두 엔진 모두 contractVersion 1.0; engine provenance만 달라짐 |
| 같은 기록된 sample plan | 11 blocks / 2 images / 6 diagrams / 0 warnings |
| Override | Track/Subject/Traits/Card/Gate 경고/Reset 정상 |
| Stable 복귀 | 6.0 Prompt 복원, 6.1 Boundary 규칙 사라짐 |
| 패키지 export/import | schema/adapter/fixtures/원본 knowledge 보존 |
| legacy 저장소 | 기존 6.1 레코드를 schema/adapter 포함 상태로 읽기 가능 |

브라우저 기록은 `P0_BROWSER_RESULTS.md`에 있다. 동일 sample은 App 실행 호환성을 확인하기 위한 기존 결과 JSON이며 새로운 LLM 추론 결과가 아니다.

## 8. 기존 Regression 결과

수정 전: **기존 40개 중 39 PASS / 1 FAIL**, 빌드 FAIL.

- `ResultDetails.tsx`: gate가 null로 좁혀진 분기에서 passed를 참조해 TypeScript 오류 발생. 중복 조건만 제거했다.
- `presentationSvg()`: `y="..."` 치환이 `font-family="..."`의 끝부분에도 일치하여 글꼴 이름이 숫자로 바뀌었다. 속성 경계를 추가했다.
- SVG 테스트의 13px 기대는 기존 15px 비교 SVG 구현과 맞지 않았다. 기존 15px 유지와 줄바꿈·글꼴 보존을 검증하도록 바로잡았다. 엔진 SVG 생성 함수와 텍스트 레이아웃 정책은 바꾸지 않았다.

최종: **49/49 PASS (기존 40 + 신규 9), 0 FAIL**. `npm run build`의 TypeScript 검사와 Vite 배포 빌드 PASS. 원문 로그 동봉.

Stable rules.json SHA-256:

`c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5`

원본과 동일하다. 6.1의 기존 downstream `track/info_types/negative_blocks/cards/rules/lint/do_not_use/block_schema/element_cap_semantics`가 6.0과 동일함을 검증했다. R4/R9, Card A~F, Prompt 6줄 순서/내용, 원본 sample 결과를 보존했다. generated instruction/Markdown/fixtures와 experimental 디렉터리 파일은 원본 대비 변경 없음.

R1–R4 fixture 존재·내용 보존과 계약/등록은 검증했다. 외부 LLM을 이용한 R1–R4 동일 입력 2회 반복, 신규 benchmark, 의미 판단 성능 평가는 수행하지 않았다. 따라서 6.1 성능 PASS/Stable 승격을 선언하지 않는다.

## 9. App 변경 여부

**내부 연결 변경 있음. UI 재설계 없음.** 기존 4단계 흐름, 버튼/필드, CSS, Track·Subject·Traits·Card 선택, 교수자 우선순위, Gate 경고, Prompt 6줄과 SVG 실행 구조를 유지했다.

바뀐 부분은 package 검증, 수신 Adapter, Prompt에 rules/schema 포함, 카드 데이터 출처, 캐시 무효화 및 확인된 원본 결함 2건이다. 서버/DB 서비스/AI API를 추가하지 않았으며, 기존 브라우저 IndexedDB를 그대로 사용한다. info_type/track/trait를 추가하지 않았다. App 버전은 0.3.2.6 유지.

추가 런타임 의존성은 Ajv이며 테스트 의존성은 fake-indexeddb다. 빌드는 성공하지만 Vite의 500kB 단일 chunk 권고는 남아 있다(최종 JS gzip 약 229kB). 이번 P0에서 화면/번들 구조 재설계는 하지 않았다.

## 10. Contract v1 Freeze 가능 여부

**가능 — 이번 P0의 선언형 패키지/평가 계약/실행 호환성 범위.**

현재 공개 계약을 지키는 지시문·규칙·schema·필드/enum 매핑 변경은 패키지로 공급할 수 있다. 내부 taxonomy나 boundary pipeline을 App이 직접 해석하지 않는다. 새 UI 상호작용, 새 공개 타입/trait/track, 새 출력 방식 또는 실행 코드가 필요한 확장은 별도 Contract/App 검토 대상이다.

다음 성능 단계는 이 결과를 기준으로 Benchmark Baseline과 실패 분류를 만드는 일이다. 이번 작업에서 Engine 6.2를 만들거나 6.1을 Stable로 승격하지 않았다.

재현 명령:

```text
npm ci
npm test
npm run build
npm run package:engines
```

Windows 샌드박스에서는 tsx 사용자 정보 접근 및 esbuild 경로 접근이 차단돼 일반 실행 환경으로 재실행했다. 이는 제품 코드 실패와 구분하여 최종 로그를 기록했다.
