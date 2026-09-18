# VDF 6.0.0 — Release Freeze

- Status: **STABLE / FREEZE**
- App release: **VDF Next v0.3.0**
- Engine: **VDF 6.0.0**
- Source of Truth: `src/domain/vdf/rules.json`
- Canonical SHA256: `c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5`

## Freeze 원칙

VDF 6.0.0은 현재 배포 기준 엔진이다. 앱 UI, 입력 어댑터, 배포 방식 변경은 엔진 규칙 변경과 분리한다. 엔진 규칙 변경이 필요하면 `rules.json`에서 시작해 별도 Candidate로 검증하고, 기존 성공 케이스를 회귀검증한 뒤 다음 Stable 버전으로 승격한다.

## 배포 판정

서로 다른 강의노트에서 정의/비교/분류/절차/사물 변형/통계 이론/프로그래밍 비유를 점검했고, 배포를 막을 수준의 공통 치명 오류는 확인하지 않았다. 실험 6.1 후보들은 일부 케이스를 개선하는 대신 기존 성공 케이스를 악화시켜 production에 포함하지 않는다.
