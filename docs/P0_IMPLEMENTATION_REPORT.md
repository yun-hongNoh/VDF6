# VDF Professor Override Completion — P0 구현 보고

## 1. 변경 파일

- `src/domain/vdf/types.ts`
- `src/domain/vdf/evaluate.ts`
- `src/services/engineEvaluation.ts`
- `src/services/vdfService.ts`
- `src/features/checker/DecisionReview.tsx`
- `src/features/checker/DecisionRail.tsx`
- `src/features/checker/ResultDetails.tsx`
- `src/features/checker/CheckerPage.tsx`
- `src/styles.css`
- `tests/review.test.ts`
- App version / release docs / `.gitignore`

Engine 6.0.0 production `rules.json`과 Engine 6.1 Semantic Boundary experimental `rules.json`은 변경하지 않았다.

## 2. Review Override 타입

`infoType`, `track`, `card`, `subject`, `subjectTraits`를 지원한다. `subjectTraits`는 기존 5개 Boolean만 사용한다.

## 3. Track Override

Review UI는 `글 중심 / 도형 / 이미지`를 제공한다. 공개 JSON contract의 track은 기존 `shape | image`를 유지한다. `글 중심`은 review/presentation state에서 `text`로 유지하면서 공개 block schema에서는 `shape`로 compile되고 SVG를 억제한다.

Image 선택 시 실제 평가 block의 `track=image`가 되고, Shape 선택 시 `track=shape`, Card/Prompt가 제거된다. 기존 Card-only override는 호환성을 위해 Image 의도로 해석한다.

## 4. Subject Override

교수자 입력 subject가 AI 원본보다 우선하며 전체 6줄 Prompt를 현재 final state에서 재조립한다.

## 5. Subject Traits Override

기존 5개 trait만 수정 가능하다. 최종 block trait에서 prompt fragments / warnings가 재계산된다.

## 6. Image Gate

AI Gate 결과를 삭제하지 않는다. Gate가 false/null인데 교수자가 Image로 바꾸면 명시적 warning을 보여주되, `track=image` 상태에서 Card/Subject가 갖춰지면 Prompt 생성은 가능하다. Shape/Text 상태에서는 Image Prompt가 존재할 수 없다.

## 7. Prompt 재조립

`Professor Override → AI block → engine rules/defaults` 우선순위로 final block을 만든 뒤 `evaluateWithEngine()`을 다시 실행한다. Prompt 문자열 부분 patch는 사용하지 않는다.

## 8. Acceptance

별도 CommonJS transpile functional harness로 T1~T7 및 text mode를 실행해 PASS했다. TypeScript/TSX 37개 파일은 TypeScript `transpileModule` syntax check PASS. Engine 6.1 semantic boundary validator PASS.

현재 컨테이너에는 프로젝트 npm dependencies가 없고 외부 registry access도 없어 `npm install` 기반의 실제 Vite production build는 이 환경에서 실행하지 못했다. GitHub/로컬에서 `npm install --include=dev && npm test && npm run build`를 최종 배포 gate로 실행해야 한다.
