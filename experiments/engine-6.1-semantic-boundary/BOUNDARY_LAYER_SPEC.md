# Semantic Block Boundary Layer — Implementation Spec

- 위치: **VDF 6.0 downstream 이전**
- 역할: Source에서 Final Semantic Blocks만 선별
- downstream 변경: **없음**
- Final JSON contract 변경: **없음**
- Trace/notes: internal IR only
- Production baseline: **6.0.0 STABLE / FREEZE**

## Runtime interpretation

현재 앱은 AI API를 호출하지 않고 Prompt Bridge로 외부 LLM에 판단을 위임한다. 따라서 Semantic Boundary는 TypeScript에서 규칙 기반으로 흉내 내지 않고, **Engine package의 rules.json + 파생 instruction/knowledge에 있는 LLM pre-layer**로 구현한다.

이 선택은 “규칙으로 가능한 것은 규칙으로, 의미 판단은 LLM”이라는 기존 VDF 구조와 맞고, 6.0 downstream 코드 변경을 피한다.
