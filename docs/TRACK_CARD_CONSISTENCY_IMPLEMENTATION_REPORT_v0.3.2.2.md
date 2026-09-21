# v0.3.2.2 Track–Card Consistency Implementation Report

## 변경 파일
- `src/services/vdfService.ts`
- `src/features/checker/DecisionReview.tsx`
- `tests/review.test.ts`
- `package.json`
- `README.md`
- `CHANGELOG.md`
- `docs/TRACK_CARD_CONSISTENCY_HOTFIX_v0.3.2.2.md`

## 핵심 변경
1. Card override로 track을 암묵적으로 image로 승격하던 backward-compatibility 로직 제거.
2. `override.track ?? base.presentationTrack`을 표현 방식의 유일한 결정 경로로 사용.
3. 최종 상태가 image일 때만 subject/Card/traits/Image Gate UI 노출.
4. Shape/Text에서는 card=null, prompt=null, image 관련 warning 없음.
5. Shape 전환 중에도 review override의 image 값은 삭제하지 않고 dormant 상태로 유지하여 Image 복귀 시 재사용 가능.

## 회귀 기준
- explicit Shape → Image는 기존처럼 동작해야 함.
- Image → Shape는 Prompt/Card를 최종 결과에서 제거해야 함.
- Image block에서 Card 변경은 subject를 보존하고 canonical 6줄 Prompt를 재조립해야 함.
- Shape block에서 stale Card/subject/traits가 있어도 Image로 승격되거나 Gate warning이 발생하면 FAIL.

## 검증 상태
- Engine 6.0 canonical `rules.json` SHA256 보존 PASS.
- Engine 6.1 Semantic Boundary validator PASS.
- 신규 test cases를 `tests/review.test.ts`에 추가.
- 현재 실행 환경에서 `npm install`이 timeout되어 full npm test/build는 미실행. 사용자 PC에서 최종 `npm install && npm test && npm run build` 권장.
