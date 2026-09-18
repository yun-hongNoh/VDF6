# VDF 6.0 Generalization Audit

## 목적
VDF 6.0은 새 규칙을 계속 추가하는 엔진이 아니라, 과도한 제약과 예외를 덜어낸 Reference/Stable 기준선으로 취급한다. 이번 Audit의 목적은 특정 Golden을 맞추는 것이 아니라 **새 수정이 다른 강의에서 이미 잘 되던 판단을 깨뜨리는 과적합을 방지하는 것**이다.

## 현재 상태
- **VDF 6.0**: REFERENCE / STABLE. 규칙·해시 변경 없음.
- **VDF 6.1**: HOLD / EXPERIMENTAL. CASE-01 두 번의 실행에서 block 수는 안정화됐지만 image 후보가 0개로 수렴해 VDF 본래의 시각화 판단력이 약화됨.
- **앱**: 실행 셸은 6.0 규칙/지시문을 변형하지 않고 Prompt Bridge에 전달하는 것으로 감사됨.

## CASE 운영
- **CASE-01H Historical Golden Reference**: 과거 공식 7블록/3이미지 기준을 보존한다. 당시 정확한 입력 원문이 현재 패키지에 없으므로 자동 실행/채점 금지.
- **CASE-01C Current Lecture**: 현재 강의노트를 그대로 실행하고 관찰한다. Historical Golden을 강제하지 않는다.
- **CASE-02 SCAMPER**: PARTIAL GOLDEN. 이미 검증된 시각 규칙의 불변성 확인용.
- **CASE-03 창의적 공학설계**: CANDIDATE. 일반화와 block segmentation 관찰용.

## 공통 실패 분류
1. `scope overflow` — 본문 외 교수학습 코너가 독립 block으로 승격됨.
2. `concept-example split` — 개념과 그 예시가 불필요하게 별도 block으로 분리됨.
3. `visual candidate loss` — 구체적 예시가 있는데도 image 후보가 사라짐.
4. `info_type drift` — 동일 의미가 실행마다 다른 정보유형으로 흔들림.
5. `card drift` — 동일 visual candidate의 카드 선택이 흔들림.
6. `schema issues` — JSON 계약 위반 또는 gate/traits 불일치.

## 수정 승인 기준
- 단일 케이스를 맞추기 위한 규칙 추가 금지.
- 최소 **2개 이상의 독립 케이스에서 동일 실패가 반복**되거나 실제 운영상 치명적일 때만 수정 후보로 승격.
- 수정은 한 번에 최소 단위 하나를 원칙으로 함.
- 수정 후 기존 성공 케이스 전체 regression 필수.
- 새 수정이 기존 좋은 판단을 깨뜨리면 즉시 rollback.
- 특정 교과목 코너명(`실무 성찰`, `AI 실전` 등)을 규칙에 하드코딩하지 않음. 향후 scope 수정이 필요하다면 교육적 역할 수준의 일반화된 한 문장만 검토.

## 현재 결론
지금은 6.0/6.1 규칙을 더 수정하지 않는다. 먼저 CASE-01C/02/03에서 6.0을 반복 실행해 공통 실패를 수집한 뒤, 반복성이 입증된 문제만 최소 수정 후보로 올린다.
