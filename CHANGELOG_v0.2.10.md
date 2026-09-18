# VDF Next v0.2.10 — Source→Block Mapping Audit

## 목표
VDF 6.0의 규칙을 건드리지 않고 CASE-01C/02/03의 실제 결과를 원문 구조와 대조하여, 반복되는 실패만 다음 수정 후보로 식별한다.

## 변경
- Engine Registry에 읽기 전용 `Source → Block Audit` 요약 패널 추가.
- `SOURCE_BLOCK_MAPPING_AUDIT.md` 추가.
- `CASE01_MAPPING.md`, `CASE02_MAPPING.md`, `CASE03_MAPPING.md` 추가.
- `COMMON_FAILURE_PATTERNS.md` 추가.
- 3개 독립 케이스에서 `한 줄 정리` 재진술이 독립 block으로 재생성되는 패턴을 3/3 반복으로 기록.
- 학습코너 범위 초과는 CASE-01C에서만 발생하여 1/3 관찰 상태로 유지.
- 설명·예시 독립 승격은 시각화 가치가 있는 경우가 있어 공통 실패로 Freeze하지 않음.

## 변경하지 않은 것
- `rules.json`
- `VDF6_규칙.md`
- `VDF6_지시문.md`
- Domain evaluate / parse / types / sample
- VDF 6.1 HOLD 상태

## 다음 Gate
같은 세 CASE를 6.0으로 재실행해 recap 재생성이 반복되는지 확인한 뒤, 다른 교과목에서도 재현될 때만 최소 규칙 수정 후보를 승인한다.
