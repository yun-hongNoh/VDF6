# Same-input repeated run protocol

각 R1~R4를 동일 모델/동일 reasoning 조건/독립 새 채팅에서 최소 2회 실행한다.

비교: Candidate 경계 / KEEP-MERGE-DROP-SPLIT / merge type / target / Final Semantic Block 의미.

허용: 제목 표현, 문장 압축.
FAIL 후보: KEEP↔DROP, KEEP↔MERGE, 핵심 Evidence 보존↔제거, 다른 관계 별도↔병합.

> 이 패키지 빌드 환경에서는 외부 LLM 독립 실행을 자동 수행하지 않는다. 따라서 반복 실행 결과가 채워지기 전까지 Engine 상태는 EXPERIMENTAL이다.
