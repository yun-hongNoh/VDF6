# VDF Next Specification v0.2.10

## 1. Guided Workflow
1. 계획 만들기 — lecture input, ACTIVE engine, Prompt Bridge, AI JSON intake.
2. 계획 검사 — official JSON contract + block/info_type/gate/card validation + optional regression comparison.
3. 결과 확인 — block visualization, relation/card review, professor override.
4. 제작 활용 — image prompt copy, SVG copy/download, PPT handoff.

Every step transition scrolls to the top and focuses the new step heading. Previous completed steps remain accessible; future steps stay locked until prerequisite data exists.

## 2. Engine Lifecycle
Engine lifecycle is `REGISTER → INSPECT/TEST → ACTIVATE → USE → DOWNLOAD/ARCHIVE → RE-REGISTER`.

Required package files:
- `manifest.json`
- `rules.json`
- `VDF6_규칙.md`
- `VDF6_지시문.md`
- `contract.json`

Recommended regression structure:
- `regression/<case>/input.md`
- `regression/<case>/expected.json`
- `regression/<case>/README.md` optional

## 3. Registry Storage
- IndexedDB: registered EngineDef, original package bytes, parsed regression cases.
- localStorage: active engine id and small UI preferences only.

Built-in VDF 6.0 Reference / Stable is non-deletable but exportable as a standard engine ZIP.

## 4. Regression Browser
The UI enumerates CASE folders from package contents. No case names are hard-coded in the application. A CASE can activate its owning engine and load `input.md` into Step 1. Strict Golden fields, when present, are compared after plan inspection.

## 5. Runtime
Prompt Bridge and Checker resolve the same ACTIVE engine. App UI updates must not silently rewrite VDF Domain rules.

## v0.2.10 Source→Block Audit Layer
Source→Block Audit는 엔진 판정 로직이 아니라 관찰·검증 레이어다. 강의노트의 원문 구조와 실제 생성 block을 대조해 반복 실패를 기록하되, 단일 케이스를 맞추기 위해 엔진 규칙을 자동 수정하지 않는다. 현재 3개 독립 케이스에서 inline recap 재생성이 반복되었으며, 엔진 변경은 별도 승인 Gate를 거친다.
