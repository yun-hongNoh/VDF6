
## 0.3.2.5 — Visual Entity Subject Bootstrap HOTFIX
- Shape → Image bootstrap subject를 `title + slots` 요약문 조립에서 원문 기반 시각 대상·상태 추출로 변경.
- 질문/고민/설명 등 비시각 서술을 제외하고, 대상 표현은 보존.
- 새 사물·번역·배치 지시는 생성하지 않음.
- Professor subject override 우선순위와 Engine/Card 규칙은 변경 없음.
## v0.3.2.4 — Subject Bootstrap HOTFIX

- Shape/Text → Image professor override now bootstraps an editable subject from the existing block title and slots when AI subject is absent.
- Existing AI subject remains preferred; professor subject override remains highest priority.
- Bootstrap is source-grounded only: no new facts, objects, translation, or AI/API call.
- Final 6-line prompt is assembled from the bootstrapped/edited subject plus canonical Card fragments.


## v0.3.2.2 — Track–Card Consistency HOTFIX
- Card 선택이 Shape/Text block을 암묵적으로 Image로 승격하던 호환 로직 제거.
- Professor track override를 표현 방식의 source of truth로 고정.
- Shape/Text에서는 image-only UI, Gate warning, Card, Prompt를 비활성화.
- Shape 전환 시 image override 값은 삭제하지 않고 dormant 상태로 보존하여 Image 복귀 시 재사용 가능.
- T6 regression 보강: shape + stale card/subject/traits에서도 image prompt/warning이 없어야 함.
# v0.3.2.1 — Subject Propagation Hotfix

- 빈 `subject` 상태에서는 6줄 Image Prompt를 생성하지 않도록 차단.
- 기존 image block에서 Card만 Override할 경우 AI의 원래 `subject`를 그대로 보존.
- Professor subject override가 있으면 기존 우선순위대로 최종 Prompt source of truth로 사용.
- Engine 6.0.0 / Engine 6.1 EXPERIMENTAL 규칙과 Final JSON contract는 변경하지 않음.

---

# v0.3.2 — Professor Override Completion P0

- Track/Text/Shape/Image review state added.
- Subject and five subject-trait overrides added.
- Gate consistency and full prompt regeneration from professor final state added.
- Shape/Text removes image-only prompt/card output.
- Engine 6.0 Stable and Engine 6.1 Semantic Boundary Experimental packages unchanged.

# v0.3.1.1 — GitHub Pages Build Hotfix

- Added `src/vite-env.d.ts` so TypeScript resolves Vite/CSS side-effect imports.
- GitHub Pages workflow now installs devDependencies explicitly with `npm install --include=dev`.
- Added one-command Windows deploy helper for future releases.
- VDF Engine 6.0.0 rules are unchanged.

# v0.3.1 — Guide & Decision Flow Restore

- VDF 6.0.0 Stable/Freeze 유지. 엔진 규칙 변경 없음.
- 사용 방법 페이지에 Quick Start 4단계 복원.
- 범위 → 블록/정보유형 → Image/Shape → Gate → Card 의사결정 구조 복원.
- AI 제안 / 교수자 검토 / 제작 확정 역할 구분 추가.
- 6종 정보 유형과 Card A~F 관계 안내 복원.
- GitHub Pages 설정은 저장소명 기반 base 자동 계산을 유지.

# Changelog

## v0.3.0 — Release Freeze

- VDF Engine 6.0.0을 production Stable / Freeze로 확정
- App 버전과 Engine 버전을 분리 표기
- 6.1 / Minimal / Ablation 실험 엔진을 production runtime에서 제거
- 실험 기록을 `docs/archive/`로 이동
- 배포 UI에서 Audit/Ablation 패널 제거
- GitHub Pages 자동 배포 workflow 추가
- Known Limitations 및 Freeze 문서 추가
- Engine Registry의 외부 ZIP 등록 기능은 고급 검증용으로 유지

Engine rules.json은 변경하지 않았다.

## v0.3.2.3 — Prompt Output Recovery HOTFIX
- Image + Card 상태에서 subject가 비어 있어도 canonical 6줄 Prompt 구조를 **미리보기**로 표시한다.
- 미리보기의 subject는 `[이미지 대상을 입력하세요]`로 표시되며 복사/Production Handoff에는 사용되지 않는다.
- subject를 입력하면 기존 final-state 재계산 경로가 즉시 실제 Image Prompt로 전환한다.
- Card/trait 변경은 최종 state 기준 전체 Prompt 재조립을 계속 사용한다.
- Production Handoff는 `result.prompt`가 있는 완성 Prompt만 사용한다.

## v0.3.2.6 — Visual Entity Normalization HOTFIX

- Shape → Image subject bootstrap을 병렬 시각 개체 목록 형태로 정규화.
- 원문에 있는 개체명만 사용하고 새 대상/사실/번역/배치 지시는 추가하지 않음.
- `X와 Y` / `X과 Y` / `X 및 Y` 형태를 병렬 엔티티로 분리.
- `...을 결합/대체/적용/활용한 Y`는 원문 내 결과 개체 `Y`를 우선 사용.
- `최초의` 같은 성취/서수 수식어는 개체 식별에 불필요한 경우 제거.
- 교수자 subject > 기존 AI subject > normalized bootstrap 우선순위 유지.
- Engine 6.0/6.1, Card A–F, 6-line Prompt 구조, track/card/gate 로직 변경 없음.
