# CHANGELOG

## v0.2.7 — Guided Flow & Engine Package Registry
- 상단 작업 흐름을 `계획 만들기 → 계획 검사 → 결과 확인 → 제작 활용` 4단계 Stepper로 재구성.
- 다음 단계는 필요한 데이터가 준비된 경우에만 활성화, 이전 단계 재진입 가능.
- 하드코딩된 6.0/6.1 엔진 선택을 제거하고 ZIP 기반 Engine Package Registry 도입.
- 엔진 ZIP의 manifest/rules/instruction/knowledge/contract 검증과 SHA-256 기록.
- 등록 엔진은 IndexedDB 저장, ACTIVE id만 localStorage 저장.
- 등록과 ACTIVE 전환 분리.
- Built-in VDF 6.0 Stable fallback 유지.
- ACTIVE 엔진의 rules.json을 Checker Prompt/경고 조립에 사용하도록 Service layer 추가.
- v0.2.5 Operating Profile UI/Service를 본류에서 제거.
- v0.2.5 Tooltip Portal hardening 유지.
