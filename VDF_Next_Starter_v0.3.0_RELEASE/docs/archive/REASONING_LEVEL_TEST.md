# Reasoning Level Test Protocol

추론 수준은 엔진 규칙과 별개의 변수로 관리한다.

- **Instant**: baseline regression
- **Medium**: robustness test

현재 관찰: CASE-03에서는 Medium이 의미 단위를 더 잘 통합했지만 CASE-02에서는 14개 블록까지 과분해되어, Medium이 항상 개선이라고 볼 수 없다. 따라서 provider/reasoning별 규칙을 엔진에 넣지 않는다.

비교 시 동일 입력·동일 엔진·동일 프롬프트·새 임시채팅을 유지한다.
