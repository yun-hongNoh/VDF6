# PROJECT PROFILE — VDF Next v0.2.10

## App
- React + TypeScript + Vite
- Local-first / no server
- DOCX/HWPX lecture-note input
- 4-step guided workflow with top-scroll + focus management

## Engine architecture
- App version and VDF Engine version are independent.
- Built-in fallback: VDF 6.0 Reference / Stable.
- External engines: ZIP registration through Engine Package Registry.
- Registered original package bytes and parsed engine data: IndexedDB.
- Active engine id: localStorage.
- Every engine can be downloaded as a re-registerable ZIP; Built-in 6.0 is generated in standard package form.

## Regression architecture
- Regression cases are package-owned assets under `regression/`.
- Browser auto-discovers CASE folders from package contents.
- Test launch loads CASE `input.md` into Step 1 and uses the owning engine.
- Strict Golden expected structures can be compared in Step 2.

## Canonical domain
`src/domain/vdf/rules.json`, `evaluate.ts`, `parse.ts`, `rules.ts`, `sample.ts`, and `types.ts` remain byte-identical to v0.2.7. Dynamic engine lifecycle features live outside Domain.

## v0.2.10 현재 감사 상태
- VDF 6.0 Reference/Stable 유지, 6.1 HOLD.
- 엔진 규칙 변경 없이 Source→Block Mapping Audit 수행.
- 3/3 케이스에서 inline recap(`한 줄 정리`)의 독립 block 재생성을 관찰.
- CASE-02는 향후 최소 수정 시 보호 회귀 케이스로 사용.
