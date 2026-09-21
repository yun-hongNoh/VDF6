# VDF 6.1 EXPERIMENTAL — Semantic Block Boundary Layer

> 이 문서는 `rules.json`의 `semantic_boundary_layer`에서 생성된 실험 규칙이다.
> **기존 VDF 6.0 downstream 판정은 변경하지 않는다.**

## 0. Boundary Layer 목적

강의노트의 모든 의미 단위를 곧바로 Block으로 만들지 않고, 기존 VDF 6.0이 판단해야 할 Final Semantic Block만 선별한다.

**Less Blocks가 아니라 Right Blocks.**

### 처리 흐름

```text
SOURCE
CONTEXT + SCOPE
CANDIDATE SEGMENTATION
BLOCK DECISION: KEEP / MERGE / DROP / SPLIT
MERGE PAYLOAD: CONTENT / NOTE / SYNTHESIS
VISUAL EVIDENCE PRESERVATION
FINAL SEMANTIC BLOCKS
VDF 6.0 DOWNSTREAM
```

### Scope

Final Block 생성 대상: **본강의 핵심 본문**

기본 제외: 표지, 주차/강 제목, 학습목표, 학습내용 개요, 마음열기/도입, 평가, 정답/해설, 학습정리

**Out of output != Out of reasoning. 제외 대상도 판단 Context로 읽을 수 있다.**

### Candidate Segmentation

Candidate 역할: 정의, 개념 설명, 비교, 분류, 과정, 인과, 목록, 사례, 적용, 오개념, 주의, 예외, 확장, 결론

자동 Block 기준이 아님: 소제목, 표, Callout, 기사 Point, 비교하기, 적용하기

### Block Decision

- **KEEP** — 독립 학습 의미 / 다른 학습 관계 / 핵심 의미·Evidence 보존이 필요한 경우
- **MERGE** — 별도 Block은 필요 없으나 의미는 보존해야 하는 경우
  - `CONTENT_MERGE`: 핵심 구조의 실제 item
  - `NOTE_MERGE`: 확장·예외·주의·보조 설명
  - `SYNTHESIS_MERGE`: 새 관계 없이 앞 내용을 정리하는 결론
- **DROP** — 범위 밖 / 활동 지시만 / 단순 반복 / 뒤에서 더 완전하게 제공 / 새 학습 의미 없음
- **SPLIT** — 하나의 Candidate 안에 서로 다른 학습 관계가 섞인 경우만. 시각 용량 문제는 여기서 다루지 않는다.

### Same Topic Rule

같은 주제라는 이유만으로 합치지 않는다.

- 데이터 vs 정보 → 비교 관계 → KEEP
- 데이터 → 정보 → 통찰 → 가치 → 과정 관계 → KEEP

### Visual Evidence Preservation

> 병합하면 학습자가 실제로 보아야 이해할 수 있는 대상·상태·변형·결합 관계가 사라지는가?

YES이면 MERGE를 취소하고 KEEP한다. 단순히 실제 사례라는 이유만으로 KEEP하지 않는다.
핵심 질문은 **“실제 대상 간 관계 자체를 보아야 원리를 이해할 수 있는가?”** 이다.

Regression anchor: **동전 펀치기 + 포도주 압착기 → 구텐베르크 인쇄기** 사례는 Combine 원리의 핵심 Evidence이므로 KEEP한다.

### 기존 Engine 6.0과의 경계

Final Semantic Blocks 이후에는 아래를 **그대로 VDF 6.0에 맡긴다.**

- info_type 6종
- R9
- Image / Shape
- subject traits 5종
- R4
- Image Gate
- Card A~F
- Prompt 6줄 구조

### Internal Trace / notes

- Trace 기본값: 내부 검증 전용
- Debug trigger: `TRACE_MODE=ON`
- Trace는 별도 debug artifact로만 출력하고 **기존 Final JSON에는 넣지 않는다.**
- `notes`는 내부 IR에서만 사용하며 Final JSON schema를 변경하지 않는다.

---

## VDF 6.0 Downstream Rules — Verbatim Baseline

# VDF 6.0 규칙

> 본강의 본문 시각화 판정 기준. 이 문서 밖의 규칙을 만들지 않는다.

## 1. 트랙 판정

**노드의 라벨을 지웠을 때 남는 게 있으면 이미지, 없으면 도형.**

- 도형: 항목의 정체가 텍스트 자체. 라벨을 지우면 빈 상자만 남음
- 이미지: 항목의 정체가 사물·현상·장치. 라벨을 지우면 그림이 남음
- 표·수식·정의 목록은 언제나 도형. 생성형으로 만들지 않는다

## 2. 정보 유형 6종

이 여섯 개 밖의 이름을 쓰지 않는다.

| 유형 | 신호 | 출력 형식 |
| --- | --- | --- |
| **순서·절차** | 단계, 순서, ~후에, 프로세스 | 번호 \| 명칭 \| 설명 |
| **분류·계층** | 상위-하위, ~로 나뉨, 유형 | 대분류 \| 하위항목 목록 |
| **비교·대조** | 반면, ~와 달리, 장단점 | 항목 \| A값 \| B값 |
| **인과·수렴** | 따라서, 그 결과, ~로 이어짐 | 원인 → 중간 → 결과 |
| **정의** | ~란, ~을 의미함 | 용어 \| 정의문 |
| **목록** | 특징, 요소, 규칙 | 항목 배열 |

## 3. 절대 규칙

### 해석·비유 개념이면 배경을 죽인다
44장 최대 발견. 밀도보다 무대가 품질을 더 크게 좌우한다.

### 모든 텍스트는 PPT 레이어. 예외 없음

### 글로우·이펙트는 정보를 전달할 때만
장식 이펙트는 요소 수만 올리고 학습 포인트를 가린다.

### 비유는 그릴 사물이 좁혀질 때만 그린다
이것이 §7 '해석·비유 + 살아있는 배경 + 요소 4+'의 원인이다. 대상이 안 좁혀지니 배경으로 도망가고, 그래서 요소가 늘어난다. 증상이 아니라 원인에서 막는다.
- 판정: 그릴 대상이 구체적 사물 하나 또는 같은 사물의 변형으로 좁혀지는가
- 좁혀지면 이미지, 안 좁혀지면 정보층 텍스트로 둔다
- **없는 사물을 만들어내지 않는다.**
- 실패 패턴: 노트에 그릴 사물이 없는데 AI가 '투명 구체 두 개' 같은 것을 발명해내는 것. 노트 외 창작이며, 44장에서 무너진 것들이 정확히 이 패턴이다.

### 카드마다 모델을 고정한다

### 여백은 종류별로 다르게 처리한다
사양서 §6은 여백을 한 덩어리로 다뤘으나 실제로는 세 종류다. 카드 A·B에서 삭제된 것은 우측(교수자 영상)뿐이고 하단 10%(출처 캡션)는 남아 있다. 목적이 다르므로 따로 판정한다.

### 핵심 구도는 긍정형으로
'하지 마라'는 무시되는 빈도가 높다.

### 항목 수가 카드 요소 상한을 넘으면
블록을 쪼개거나 상한을 넘긴다. **일부만 그리지 않는다.**
그림 4개와 텍스트 5개는 학습자가 대응시킬 수 없다.

### 분류가 둘 이상이면 카드 A를 쓰지 않는다
한 줄에 나란히 놓으면 어느 것이 어느 분류인지 사라진다.
분류별로 블록을 나누거나 카드 C로 간다.

## 4. 쓰지 않는 것

| 무엇 | 왜 |
| --- | --- |
| 해석·비유 + 살아있는 배경 + 요소 4+ | 저울 광장, 창문 벽, 주방. 학습 포인트 복원 불가 |
| 이미지 내 텍스트 | 깨진 글자. 한글 불가 |
| 만화 + 대사 | 영문만 가능, 교정 부담 큼 |
| AI 생성 도표 | 표·목록·수식은 도형/텍스트 |
| 장식 글로우 | 요소 수만 올림 |
| SVG 좌표 생성 | 교수자가 템플릿에서 고르는 게 빠름 |
| 노트에 없는 사물 발명 | 규칙 R4. 무너진 이미지들의 공통 원인 |
| 인물 비유 (독불장군 vs 지휘자 등) | 44장에 성공 사례 없음. 텍스트로 |

## 5. 프리셋 카드

**프롬프트를 새로 쓰지 않는다. 아래 여섯 줄을 그대로 가져오고 subject 한 줄만 채운다.**

### 카드 A — 에셋세트 · 무배경
- **언제:** 같은 것의 여러 변형 / 여러 항목 병렬 / 단계별 부품
- **쓰지 않을 때:** 정보 유형이 분류·계층이고 분류가 둘 이상일 때 — 한 줄에 놓으면 분류 경계가 사라진다(FT-3)
- **요소 상한:** 4
- 항목 수가 4를 넘으면 블록을 쪼개거나 상한을 넘긴다. 일부만 그리지 않는다(FT-2).
- **모델:** `gemini` — 두 개 적지 않는다

```
subject: [대상]   ← 예: four variations of a paper clip, all clearly made from the same bent wire form, each repurposed as a different object, evenly spaced in a single row, three-quarter angle
background: uniform solid light-gray seamless background
composition: a single row, lower 10% clear
style: premium 3D educational render, matte materials, soft directional key light from upper-left, no baked shadows
ratio: 16:9
negative: text-free, no readable text, no letters, no numbers, no labels, no logos, no brand names, no overlapping objects, no environmental props
```

- **조건부** `identical scale`
  - 언제: 형태 변화가 학습 포인트
  - 뺄 때: 크기 변화가 학습 포인트
- **조건부** `'A를 B로 대체' 유형은 A를 함께 그린다. 변형 N개면 기준점 1개를 더해 N+1개.`
  - 언제: 
- **조건부** `unbranded, no app icons, no screen content, no brand logos, generic design`
  - 언제: 브랜드 연상이 강한 대상군은 항상. 휴대기기·웨어러블·차량·가전·컴퓨터.
- **조건부** `all clearly made from the same bent wire form`
  - 언제: 같은 사물의 변형을 나열할 때. 카드 A의 기본 용법이므로 사실상 항상.

### 카드 B — 개념 · 단일 오브젝트 · 무배경
- **언제:** 추상 원리를 한 컷으로 / 대비되는 두 상태를 한 오브젝트에
- **요소 상한:** 3
- **제약:** 하나하나가 의미를 가져야 함
- **모델:** `gemini` — 두 개 적지 않는다

```
subject: [대상]   ← 예: a balance scale, tilted, a plain gray card on the raised pan and a vivid accent-colored card with a check badge on the lowered pan
background: uniform solid light-gray seamless background, subtle floor reflection
composition: the object centered, lower 10% clear
style: premium 3D educational render, matte materials, soft key light
ratio: 16:9
negative: text-free, no readable text, no labels, no environmental detail, no decorative HUD rings, no floating data readouts
```

- **조건부** `the superseded items rendered in flat desaturated gray, clearly unused`
  - 언제: 과거/현재 대비를 그릴 때

### 카드 C — 조건 대조 · 좌우 분할
- **언제:** 조건 A와 B의 결과 차이가 학습 포인트
- **요소 상한:** 3
- **제약:** 좌우가 같은 앵글·같은 스케일이어야 비교 성립
- **모델:** `gemini` — 두 개 적지 않는다

```
subject: [대상]   ← 예: two identical soil cross-sections side by side, exactly the same number of elements on each side, left with a smooth pile driven down showing cool stress lines, right with a rough pile showing dense friction lines
background: plain seamless background, environment barely visible
composition: both halves sit on one single continuous unbroken floor plane with no seam or line between them, identical camera angle and scale, the pair grouped within the left 60% of the frame, the right 40% is empty background
style: premium 3D educational render, accent glow carrying the data only
ratio: 16:9
negative: text-free, no readable text, no labels, no decorative HUD rings
```

- **필수** `identical camera angle and scale`

### 카드 D — 장치 작동 · 단일 · 맥락 배경
- **언제:** 장치의 작동 맥락이 학습 포인트일 때
- **요소 상한:** 2
- **제약:** 장치 + 작동 표시 하나
- **모델:** `gemini` — 두 개 적지 않는다

```
subject: [대상]   ← 예: a vacuum cleaner head on carpet, airflow arrows drawn into the nozzle showing suction direction
background: plain seamless background, minimal environment barely visible
composition: low angle close-up on the left, right 40% empty
style: premium 3D educational render, accent glow used only for airflow
ratio: 16:9
negative: text-free, no readable text, no decorative HUD rings, no floating data readouts, no sci-fi interface overlays
```


### 카드 E — 순차 패널
- **언제:** 단계가 3~4개이고 순서 자체가 내용일 때
- **모델:** `gemini` — 두 개 적지 않는다
- ⚠️ AI 단독으로 어렵다. 잘 나온 사례는 후편집으로 라벨을 얹은 것이다. 라벨 없는 패널만 요청하고, 번호와 설명은 PPT에서 얹는다.

```
subject: [대상]   ← 예: the same cylindrical filter housing shown four times in a row, identical angle and scale, differing only in internal state
background: uniform solid light-gray seamless background
composition: four evenly spaced panels in one row, no dividers
style: technical illustration, consistent cutaway style across all four
ratio: 16:9
negative: text-free, no readable text, no numbers, no step labels, no arrows between panels
```


### 카드 F — 배경 이미지 (슬라이드를 덮음)
- **언제:** 텍스트가 주인공이고 이미지는 무대
- **요소 상한:** 2
- **제약:** 정보를 실으려 하면 안 됨. 밝고 저채도가 필수 — 위에 얹힐 텍스트가 읽혀야 한다.
- **모델:** `gemini_app` — 두 개 적지 않는다

```
subject: [대상]   ← 예: an empty office desk scene, softly out of focus
background: high key, low saturation, large empty area for text overlay
composition: one continuous seamless background, no vertical seam, no split-screen, no panel division
style: soft natural light, muted palette
ratio: 16:9
negative: text-free, no readable text, no informational elements, no charts, no diagrams, no HUD, no strong focal point in the center
```

- **조건부** `the left 55% is plain empty wall with no objects`
  - 언제: 사물이 화면 전체에 퍼지는 대상(작업대·선반·공방 등) 또는 이전 시도에서 빈 자리가 안 나온 경우
  - 뺄 때: 사물이 자연히 한쪽에 모이는 대상(책상·복도). 지시를 덜 넣는 쪽이 낫다.
- **조건부** `everything softly out of focus, shallow depth of field throughout, no sharp object anywhere`
  - 언제: 앞쪽에 물체가 놓이는 대상. 사실상 대부분의 F 대상.
- 어려운 대상: 작업대 — 빈 영역이 뚜렷하게 생기지 않고 앞쪽 물체가 선명해지기 쉽다.

## 6. 절대 쓰지 않는 단어

프롬프트에 `transparent`, `alpha` 금지. 모델이 가짜 체크무늬 배경을 그린다.

## 7. 대상 속성 5종

배경층이 있는 블록은 대상의 속성 다섯 개를 **항상** 낸다. 해당 없으면 false.
조건부 조각 문자열은 직접 쓰지 않는다 — 속성만 내면 붙는다.

| 속성 | true인 경우 | 붙는 조각 |
| --- | --- | --- |
| branded_category | 휴대기기·웨어러블·차량·가전·컴퓨터 | `unbranded, no app icons, no screen content` |
| same_form_variants | 같은 사물의 변형을 나열 | `all clearly made from the same [기본형]` |
| replacement_type | 'A를 B로 대체' 유형 | 기준점을 더해 N+1개로 그린다 |
| scale_is_the_point | 크기 변화가 학습 포인트 | `identical scale`을 **뺀다** |
| spreads_across_frame | 사물이 화면 전체에 퍼짐 | 카드 F에 여백 위치를 명시한다 |


## 8. 요소 상한은 물체가 아니라 의미 단위로 센다

하나하나가 학습 내용을 실어야 요소로 센다.
맥락을 만드는 소품 무더기는 통틀어 하나로 센다.

| 예 | 물체 수 | 의미 단위 |
| --- | --- | --- |
| 캡슐 커피머신 + 드립 도구들 | 7~8 | **2** — 도구 무더기 / 기계 |
| 저울 + 회색 카드 + 강조 카드 | 3 | **2** — 저울 / 두 선택지 |
| 클립 4종 | 4 | **4** — 각각이 변형 하나 |


## 9. 그림이 아니면 도형이다

그림으로 가지 않은 덩어리를 글 목록으로 두지 않는다. **항목 관계가 도형을 정한다.**
따로 판정하지 않는다.

| 항목 관계 | 도형 |
| --- | --- |
| 목록 | 카드 나열 — 항목만 |
| 분류·계층 | 카드 나열 — 카드마다 제목 + 사례 줄. 목록과 같은 패턴의 변형 |
| 순서·절차 | 단계 흐름 — 번호 + 화살표 |
| 비교·대조 | 좌우 대비 — 잣대 없이 두 덩어리가 마주 본다 |
| 인과·수렴 | 화살표 연쇄 |
| 정의 | **도형 없음 — 글로 둔다** — 도형을 만들지 않는다. 글로 둔다. |

항목이 5개를 넘으면 2행으로 접는다.

**목록과 인과·수렴은 규칙으로 가르지 않는다.** 해석의 문제다. 하나를 고르되 교수자가 바꿀 수 있다.

## 10. 표·도형·그림은 같이 쓰지 않는다

한 슬라이드에 둘 이상 오면 밀도가 너무 높다. 표+글, 도형+글은 흔하다.

- **표** — 노트 원문에 이미 표로 있을 때만. 판정하지 않고 그대로 옮긴다.
- **무대 이미지(배치 F)** — 글을 그대로 놓을 때만 깐다. 표나 도형 위에는 깔지 않는다.
