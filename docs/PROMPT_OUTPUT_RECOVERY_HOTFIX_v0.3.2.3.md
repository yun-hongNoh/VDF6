# VDF v0.3.2.3 — Prompt Output Recovery HOTFIX

## 문제
Shape → Image 전환 후 subject가 비어 있으면 안전장치에 의해 final Prompt가 null이 되는데, Review 화면에서도 6줄 구조가 전혀 보이지 않아 사용자가 Prompt 기능 자체가 사라진 것으로 해석할 수 있었다.

## 수정
- `track=image + card selected`이면 Card canonical 6줄 Prompt를 Review 화면에서 미리보기로 표시한다.
- subject가 비어 있으면 첫 줄은 `[이미지 대상을 입력하세요]`로 표시한다.
- 이 미리보기는 제작용 final Prompt가 아니며 복사/Production Handoff에 사용하지 않는다.
- subject를 입력하면 final state가 재평가되고 실제 6줄 Prompt가 즉시 표시된다.
- Image → Shape에서는 미리보기와 final Prompt 모두 표시되지 않는다.

## Source of Truth
Production Prompt는 계속 `BlockEvaluation.prompt`만 사용한다. Preview는 UI 안내 전용이며 엔진/JSON contract를 변경하지 않는다.
