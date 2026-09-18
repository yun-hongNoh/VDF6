# CHANGELOG v0.2.9

## Generalization Audit
- VDF 6.0을 `REFERENCE / STABLE`로 명확화.
- 번들 VDF 6.1 Candidate를 `HOLD / EXPERIMENTAL` 메타데이터로 전환. 엔진 규칙 자체는 수정하지 않음.
- CASE-01을 `CASE-01H Historical Golden Reference`와 `CASE-01C Current Lecture`로 논리 분리.
- Historical Golden은 당시 정확한 입력 원문이 확보되지 않아 실행 버튼을 비활성화.
- Current Lecture는 관찰 전용이며 과거 7블록/3이미지 정답을 강제하지 않음.
- Engine Registry에 Generalization Audit 정책과 최소 수정 승인 기준 추가.
- `GENERALIZATION_AUDIT.md` 추가.
- 앱 버전 0.2.9. VDF 6.0 rules.json 해시와 canonical 판단 로직은 변경하지 않음.
