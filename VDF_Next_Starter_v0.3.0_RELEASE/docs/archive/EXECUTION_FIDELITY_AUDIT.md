# VDF 6.0 Execution Fidelity Audit

## 결론

**현재 확인된 1차 원인은 VDF 6.0 엔진 파일의 변조나 Prompt Bridge 절단이 아니다.**
가장 큰 문제는 **CASE-01의 현재 입력과 역사적 Golden 7-block 기대값 사이의 불일치**다.

현재 CASE-01 입력에는 과거 본문 뒤에 다음 신규 코너가 포함되어 있다.

- `[학습코너] 실무 성찰 : 일상을 뒤집는 시선`
- `[AI 실전] 트리즈로 질문하라 : 현실적 제약을 설정하라`

하지만 canonical VDF 6.0 scope는 다음만 제외한다.

> 본강의 본문 시각화만. 표지·학습목표·마음열기·평가·학습정리 제외.

즉 **실무 성찰 / AI 실전은 canonical 6.0 scope에서 명시적으로 제외되어 있지 않다.** 반면 현재 CASE-01 expected/manual check는 이 두 코너를 제외하라고 요구한다. 이 둘은 동시에 참일 수 없다.

## 1. Engine source fidelity

- `src/domain/vdf/rules.json` SHA-256: `c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5`
- Built-in VDF 6.0은 이 canonical rules.json을 그대로 사용한다.
- `public/vdf_instructions.md`와 `src/generated/engines/vdf60.ts`의 INSTRUCTION 문자열은 동일하다.
- `public/vdf_rules.md`와 generated RULES 문자열도 동일하다.

**판정: PASS — Registry에서 6.0이 다른 규칙 파일로 교체된 흔적 없음.**

## 2. Prompt Bridge fidelity

`extractVdfInstruction()`은 nested `json` code fence 때문에 첫 fence에서 잘리는 과거 버그를 피하도록 구현되어 있다. `## 1차 테스트` 앞까지 가져온 뒤 마지막 outer fence를 제거한다.

실제 현재 Web Prompt와 canonical/manual-equivalent Prompt의 차이는 앱이 앞에 붙이는 다음 메타 안내뿐이다.

```text
# VDF 6.0 Stable 블록 계획 실행
현재 ACTIVE VDF Engine은 6.0.0 (STABLE)입니다. ...
```

지시문 본문, rules markdown, CASE 입력은 동일하다. manifest/contract/regression expected는 AI Prompt에 삽입되지 않는다.

**판정: PASS(경미한 wrapper 차이) — 현재 성능 저하의 주원인으로 볼 근거 없음.**

## 3. Input Adapter

Regression Browser의 CASE 입력은 generated regression의 `input` 문자열을 직접 계획 만들기로 전달한다. 따라서 CASE-01을 Regression Browser에서 불러온 테스트에는 DOCX/HWPX Adapter가 개입하지 않는다.

일반 DOCX 업로드 시에는 paragraph/table을 Markdown-ish text로 변환하므로 별도 검증이 필요하지만, 현재 CASE-01 A/B 테스트 문제와는 분리해야 한다.

**판정: CASE-01 Regression 테스트에는 비관여.**

## 4. CASE-01 fixture consistency

현재 fixture는 `GOLDEN`으로 표시되지만 내부적으로 다음 충돌이 있다.

1. 현재 input은 `[학습코너] 실무 성찰`, `[AI 실전]`을 포함한다.
2. canonical 6.0 scope에는 두 코너 제외 규칙이 없다.
3. expected/manual check는 두 코너를 제외하라고 요구한다.
4. historical reference_case는 7 blocks / 3 images만 기록하고, 그 결과를 만든 당시의 정확한 입력 snapshot은 rules.json 안에 보존되어 있지 않다.

따라서 현재 입력에 대해 7-block Golden을 강제하면 **엔진을 역사적 결과에 과적합**시킬 위험이 있다.

**판정: FAIL — 현재 Regression fixture가 strict Golden으로 사용되기에는 source/input lineage가 불충분함.**

## 5. 6.0 Run 결과와의 연결

사용자 A/B에서 6.0이 10 blocks / 8 blocks를 생성하며 후반 코너를 추가한 것은 현재 scope 규칙만 보면 설명 가능하다. 이는 곧바로 "웹앱이 6.0을 망가뜨렸다"는 증거가 아니다.

반대로 공학의 본질+커피 사례 분리, 창의성 부분의 shape/image 판단 편차는 엔진/모델 판정 문제로 남아 있다. 이 문제는 fixture 정합성을 복구한 뒤 다시 평가해야 한다.

## 권고

1. **6.1 수정 중단 / HOLD 유지.**
2. **6.0 Stable 규칙은 지금 수정하지 않는다.**
3. CASE-01을 두 케이스로 분리한다.
   - `CASE-01H Historical Golden`: 7-block 결과를 만든 실제 당시 입력을 찾을 수 있을 때만 strict Golden 유지.
   - `CASE-01C Current Lecture`: 현재 확장된 강의노트는 Candidate로 두고 새 expected를 검증해 Freeze.
4. 현재 강의 체계에서 실무 성찰/AI 실전을 VDF 본문에서 항상 제외하는 것이 교육 설계 의도라면, 이것은 app workaround가 아니라 **rules.json scope의 정식 변경안**으로 검토해야 한다.
5. 그 후 6.0 Reference를 동일 입력으로 2회 이상 재실행해 기준 성능을 다시 측정한다.

## 수정 여부

이번 Audit에서는 **엔진과 실행 코드를 수정하지 않았다.** 현재 발견된 핵심 문제가 execution corruption보다 fixture/source-of-truth mismatch이기 때문이다. 증거 없이 Prompt 또는 rule을 수정하면 원인을 가릴 수 있다.
