# VDF Next v0.2.10 실행

## 1. 실행
Windows에서 압축을 푼 뒤 `start_windows.cmd`를 실행합니다.

수동 실행:
```cmd
npm install
npm run dev
```

## 2. 기본 작업 흐름
상단 4단계를 순서대로 사용합니다.
1. 계획 만들기
2. 계획 검사
3. 결과 확인
4. 제작 활용

단계를 이동하면 화면이 항상 새 단계의 최상단으로 이동하고 제목에 focus가 놓입니다.

## 3. 엔진 관리
`VDF 엔진 관리`에서 엔진 ZIP을 등록합니다. 등록만으로는 적용되지 않습니다. `이 엔진을 ACTIVE로 적용`해야 Prompt Bridge와 Checker가 새 엔진을 사용합니다.

각 엔진은 `엔진 ZIP 다운로드`로 다시 보관할 수 있습니다. Built-in VDF 6.0도 다운로드 가능합니다.

## 4. Regression Test
엔진 카드에서 `상세 / 테스트`를 엽니다. 엔진 패키지의 `regression/` 폴더에 있는 CASE가 자동 표시됩니다.

- CASE-01: GOLDEN
- CASE-02: PARTIAL_GOLDEN
- CASE-03: CANDIDATE

`이 엔진으로 테스트`를 누르면 해당 엔진이 ACTIVE로 적용되고 CASE의 `input.md`가 1단계 강의노트에 자동으로 들어갑니다. 외부 AI에서 결과를 만든 뒤 2부 JSON을 붙여넣으면 계획 검사 단계에서 Golden 구조 비교가 표시됩니다.

## 먼저 확인할 것 — Generalization Audit
기본 운영 엔진은 **VDF 6.0 Reference / Stable**입니다. VDF 6.1은 실험 결과 시각화 후보 손실이 확인되어 HOLD 상태입니다. 엔진 관리 화면에서 CASE-01C, CASE-02, CASE-03을 6.0으로 반복 테스트하고, 단일 실패를 즉시 규칙 수정으로 연결하지 마세요.

## Source→Block Audit 확인
앱 실행 후 `VDF 엔진 관리` 화면 상단의 `6.0 원문→블록 매핑 감사` 패널에서 현재 공통 패턴 요약을 확인할 수 있습니다. 상세 근거는 루트의 `SOURCE_BLOCK_MAPPING_AUDIT.md`, `CASE01_MAPPING.md`, `CASE02_MAPPING.md`, `CASE03_MAPPING.md`, `COMMON_FAILURE_PATTERNS.md`에 있습니다.
