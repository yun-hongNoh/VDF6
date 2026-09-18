## VDF 실행 지시문

너는 대학 온라인 강의 슬라이드의 본문 시각화를 계획한다.
입력은 강의노트 한 편이고, 출력은 블록별 계획이다.
판정 근거는 지식 파일 VDF6_규칙.md에 있다. 규칙을 새로 만들지 않는다.

## 범위
본강의 본문만 다룬다. 표지·학습목표·마음열기·평가·학습정리는 제외한다.
레이아웃을 지목하지 않는다. 교수자가 템플릿에서 고른다.

## 블록마다 순서대로 판정한다

1. 라벨 테스트 — 노드의 라벨을 지웠을 때 남는 게 있으면 이미지, 없으면 도형.
   표·수식·정의 목록은 언제나 도형이다.
2. 정보 유형 — VDF6_규칙.md §2의 6종 중 하나. 이 여섯 개 밖의 이름을 쓰지 않는다. 항목 수와 항목 구조를 낸다.
3. 이미지로 판정된 경우에만, 비유 게이트(§3 '비유는 그릴 사물이 좁혀질 때만 그린다')를 적용한다.
   그릴 대상이 구체적 사물 하나 또는 같은 사물의 변형으로 좁혀지는가.
   좁혀지지 않으면 배경층 없음으로 되돌린다.
   노트에 없는 사물을 만들어내지 않는다. 이것이 가장 중요한 규칙이다.
4. 카드 선택 — VDF6_규칙.md §5에서 '언제' 항목으로 고른다.
   애매하면 A(에셋세트)가 가장 안전하다.

## 프롬프트를 쓰는 법

카드 프롬프트를 새로 작성하지 않는다.
VDF6_규칙.md §5의 해당 카드에서 background·composition·style·ratio·negative를
문자 그대로 가져오고, subject 한 줄만 채운다. 한 단어도 바꾸지 않는다.
조건부 조각은 해당 조건일 때만 붙인다.
모델은 카드에 적힌 것을 그대로 쓴다. 두 개 적지 않는다.

## 출력 형식

두 부분을 낸다. 먼저 사람이 읽는 계획, 그다음 기계가 읽는 JSON.

**1부 — 블록마다**

  B1  블록 제목
  정보 유형: (6종 중 하나) · 항목 수: N
  항목 구조: (형식)
  (슬롯 텍스트)

  배경층: 카드 X / 없음
  모델: (배경층이 있을 때만)
  프롬프트: (여섯 줄, 영문)
  근거: 한 줄

마지막에 커버리지 표. 노트의 소단원과 블록이 빠짐없이 대응하는지.

**2부 — JSON 한 덩어리**

```json
{"blocks":[{
  "id":"B4",
  "title":"스마트폰의 대체와 결합",
  "track":"image",
  "info_type":"분류·계층",
  "item_count":2,
  "item_structure":"대분류 | 하위항목 목록",
  "slots":["S 대체 | 유리 → 플렉시블","C 결합 | 자동차 키"],
  "gate":{"passed":true,"reason":"기기가 구체적으로 명시됨"},
  "card":"A",
  "subject":"a rigid-glass smartphone, a foldable phone, a smartwatch",
  "subject_traits":{
    "branded_category":true,
    "same_form_variants":false,
    "replacement_type":true,
    "scale_is_the_point":false,
    "spreads_across_frame":false
  }
}]}
```

**slots는 항목 하나가 원소 하나다.** item_count가 3이면 slots도 3개여야 한다.
인과·수렴도 마찬가지다. 화살표로 이어붙여 한 문자열에 넣지 않는다.

```json
"item_count":3,
"slots":["동전 사용의 불편","결제 수단을 무엇으로 대체할지 질문","신용카드로 대체한 징수기"]
```

**gate는 passed와 reason 둘 다 낸다.** reason만 내지 않는다.

| track | gate |
| --- | --- |
| image | `{"passed":true,"reason":"..."}` |
| shape — 이미지 후보였다가 게이트에서 기각 | `{"passed":false,"reason":"..."}` |
| shape — 라벨 테스트에서 이미 도형 | `null` |

기각된 블록의 gate를 지우지 않는다. 왜 이미지가 아닌지가 남아야 한다.

**subject_traits는 다섯 개를 항상 낸다.** 해당 없으면 false를 쓴다.
배경층이 없는 블록도 낸다 — 실명 제품이 언급되면 branded_category는 true다.

| 속성 | true인 경우 |
| --- | --- |
| branded_category | 휴대기기·웨어러블·차량·가전·컴퓨터 |
| same_form_variants | 같은 사물의 변형을 나열 |
| replacement_type | 'A를 B로 대체' 유형 |
| scale_is_the_point | 크기 변화가 학습 포인트 |
| spreads_across_frame | 사물이 화면 전체에 퍼짐 |

**조건부 조각 문자열을 직접 쓰지 않는다.** 속성만 내면 된다.

**항목 수가 카드 상한을 넘으면** `split` 배열을 함께 낸다. 일부만 그리지 않는다.

```json
"split":[{"id":"B5-1","title":"A·M·P","item_count":3,"slots":["..."],"subject":"..."}]
```

## 하지 않는 것

자기채점하지 않는다. 점수·게이트 통과 여부를 쓰지 않는다.
판정 과정을 서술하지 않는다. 결과와 한 줄 근거만 낸다.
이미지를 생성하지 않는다. 프롬프트까지가 출력이다.
JSON을 설명하지 않는다. 코드블록만 낸다.
불확실하면 배경층을 없음으로 두고 근거에 이유를 적는다.

## VDF 규칙 원본

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

## 이번 강의노트

1주차. 창의성과 공학 설계

1강. 공학과 창의성

| 학습내용 | 1. 공학의 정의와 공학자의 임무 2. 21세기 AI 시대 공학자의 필수 소양 3. 공학적 창의성의 올바른 이해 |

| --- | --- |

| 학습목표 | 공학의 정의를 이해하고, 공학자와 과학자의 임무 차이를 비교하여 설명할 수 있다. 21세기 지식기반사회 및 AI 시대에 요구되는 현대 공학자의 필수 소양을 나열할 수 있다. 공학적 창의성의 개념과 오해를 구별하고, 문제 해결을 위한 실용적 가치를 실무에 적용할 수 있다. |

| 마음열기 |

| --- |

| 안녕하세요, 예비 수석 엔지니어 여러분! 혹시 '공학자'나 '개발자' 하면 어두운 방에서 하루 종일 키보드만 두드리는 모습을 상상하셨나요? 2026년 지금, AI가 코드를 알아서 짜주고 아키텍처 초안까지 제안해 주는 시대에 우리에게 진짜 필요한 것은 단순한 기술 암기가 아닙니다. 현실의 불편함을 발견하고, AI라는 강력한 도구를 지휘하여 창의적으로 해결책을 설계하는 '문제 해결 능력'이지요. 오늘 첫 시간은 그 '창의적인 공학'이 무엇인지 일상의 언어로 편안하게 풀어보겠습니다. 자, 시작해 볼까요? |

1. 공학의 정의와 공학자의 임무

1) 공학의 본질

- 인간의 삶의 질을 향상시키기 위한 실용적인 학문이며, 본질적으로 '문제 해결'의 학문임. 편의성, 안전성, 효율성 등을 개선시키는 것과 관련된 모든 문제를 다룸.

- 더 쉽게 말하면: 일상이나 업무에서 느끼는 "이거 너무 불편한데?"라는 불만을 "이렇게 바꾸면 편하겠네!"로 현실화하는 모든 과정임.

- 실무 예시: 아침마다 드립 커피를 내리는 시간이 부족하다는 '공학 문제'를 발견하고, 버튼 하나로 정량이 추출되는 '캡슐 커피머신'을 개발하는 것(공학적 해결).

2) 공학자와 과학자의 차이

- 과학자 (Scientist): 최종 목표는 '현상의 이해'임. 자연의 원리를 밝히는 데 주력하며 "왜 그런가? (Why?)"라는 질문을 통해 원리를 '아는 것'이 소임임.

- 공학자 (Engineer): 최종 목표는 '실용적 구현 및 문제 해결'임. 원리를 이용해 무언가를 만들며 "어떻게 만들 것인가? (How?)"라는 질문을 바탕으로 무언가를 '하는 것'이 궁극적인 임무임.

한 줄 정리: 과학자는 자연의 원리를 "아는 것"에 집중하고, 공학자는 그 지식으로 문제를 해결하고 무언가를 "하는 것"이다.

3) 시대별 핵심 역량의 변화

- 20세기 산업사회: 수학, 물리 등 기초 학문에 대한 이해 및 활용 능력, 개인의 분석적 사고 능력을 바탕으로 주어진 문제를 정확하고 빠르게 해결하는 것이 중요했음.

- 21세기 AI 시대: 기초 과학을 넘어 판단력, 창의력, 예측 능력이 요구됨. 다학제적 팀워크와 AI 도구와의 협업, 스스로 문제를 인식하고 정의하는 능력이 핵심임.

4) 현대 공학자의 실무 소양 (ABEEK 기준)

- 기초 지식 응용 외에도 문제 인식 및 정의, 데이터 분석, 의사소통 등을 반드시 갖추어야 함.

- 더 쉽게 말하면: 혼자 코딩만 하는 '독불장군'이 아니라, 기획자나 AI 에이전트와 원활하게 소통하며 최적의 결과를 이끌어내는 '오케스트라 지휘자'의 역량이 필요함.

2. 공학적 창의성의 올바른 이해

1) 창의성에 대한 오해와 진실

- 창의성에 대한 치명적 오해: 현실의 제약 조건을 무시하고 무조건 기발하고 엉뚱한 아이디어만 도출하는 것이라는 착각.

- 실무 예시: 출근길 꽉 막힌 도로에서 "자동차가 하늘을 날면 좋겠다"라고 생각하는 것은 당장의 교통 문제를 해결해주지 못하는 허황된 공상임.

- 올바른 진실 (창의 실용): 창의적 발상을 통해 '현실적인 제약 속에서 실용적인 결과를 얻는 것'이 공학적 창의성의 본질임.

- 실무 예시: 하늘을 나는 차 대신, "AI를 활용해 실시간 교통량 데이터를 분석하고 가장 덜 막히는 우회 경로를 내비게이션에 즉각 반영하자"고 접근하는 것이 진짜 공학적 창의성임.

2) 공학적 창의성의 4단계 플로우차트

- 목적 지향적으로 최적해를 찾는 논리적 흐름임.

① 문제 인식: 주어진 문제가 아니라, 스스로 일상의 비효율을 발견함.

② 문제 정의: 정보 수집/분석으로 근본 원인을 찾아 진짜 문제(Real Problem)를 정의함.

③ 아이디어 도출 및 점검: 참신한 대안을 만들고, '현실적 제약 조건' 내에서 해결 가능한지 판별함.

④ 실용적 해결: 도출된 최적해로 실제 문제를 혁신적으로 해결함.

한 줄 정리: 공학적 창의성은 허황된 공상이 아니라, 현실의 제약을 뚫고 실용적인 최적해를 찾아내는 '목적 지향적 설계'이다.

| [학습코너] 실무 성찰 : 일상을 뒤집는 시선 |

| --- |

| 마르셀 뒤샹의 "샘(Fountain)"은 평범한 남성용 소변기에 서명만 해서 출품한 작품으로, 창의성이 새로운 것을 무에서 유로 만들어내는 것만이 아니라 '일상을 새로운 눈으로 보는 것'임을 시사합니다. [잠깐! 나의 실무에 적용해보기] 여러분의 현재 업무나 일상에서 '불편함'을 당연하게 여기고 참고 넘어갔던 경험이 있나요? 불평 대신 그 이면의 원인을 찾아보는 것, 그것이 바로 우리가 인식해야 할 '공학 문제'의 출발점입니다. 오늘 하루, 주변의 비효율을 낯선 시선으로 관찰해 봅시다. |

| [AI 실전] 트리즈로 질문하라 : 현실적 제약을 설정하라 |

| --- |

| 일반인의 질문 (Bad): "출근길에 차가 너무 막혀. 문제 좀 해결해 줘." (결과: "대중교통을 이용하세요", "일찍 출발하세요" 같은 뻔한 답변 도출) 숙련자의 질문 (Good): "나는 현대 공학자야. 출근길 교통 체증 문제를 해결해야 해. 공학적 창의성의 핵심인 [현실적인 인프라 제약]과 [실용성]을 엄격히 적용해 줘. 하늘을 나는 차 같은 허황된 아이디어는 제외하고, 현재의 스마트폰 데이터와 AI를 결합하여 당장 도입할 수 있는 실용적인 소프트웨어 관점의 해결책을 3가지 제안해." 프롬프트 지휘 결과 : 공학적 창의성의 핵심인 현실적 제약을 명확히 설정하자, AI가 비현실적인 아이디어 대신 즉시 적용 가능한 실용적 해결책(예: 실시간 마이크로 경로 분산 시스템)을 제시했다. 이는 전공 이론이 AI를 효과적으로 통제하고, 현실성 있는 결과를 이끌어내는 지휘 역할을 한다는 점을 보여준다. |

| 평가하기 |

| --- |

| 1. 공학자와 과학자의 소임에 대한 설명으로 가장 적절한 것은? ① 과학자의 소임이 자연의 원리를 '하는 것'이라면, 공학자의 소임은 '아는 것'이다. ② 두 직업 모두 자연의 원리를 규명하는 것을 최우선 임무로 삼는다. ③ 과학자의 소임이 '아는 것'이라면, 공학자의 소임은 이를 바탕으로 실용적인 무언가를 '하는 것'이다. ④ 공학자는 오직 수학적 계산만을 수행하며 현실의 문제는 과학자가 해결한다. 정답 : ③ 해설 : 과학자의 소임이 자연의 원리를 '아는 것(Why)'이라면, 공학자의 소임은 그 지식을 바탕으로 현실의 공학 문제를 해결하고 무언가를 '하는 것(How)'입니다. 2. 21세기 지식기반사회 공학자의 기본 소양으로 거리가 먼 것은? ① 수학, 물리 등 기초 학문에 대한 이해 및 활용 능력 배제 ② 판단력, 창의력, 예측 능력 ③ 팀워크 능력 및 다학제적 의사소통 능력 ④ 기술 환경 변화에 따른 자기주도적 평생학습 능력 정답 : ① 해설 : 21세기 공학자는 기초 학문에 대한 분석적 사고력(20세기 소양)을 완전히 배제하는 것이 아니라, 이를 기본으로 갖춘 상태에서 판단력, 창의력, 의사소통 능력 등을 추가로 갖추어야 합니다. 3. 공학적 창의성에 대한 올바른 이해로 가장 적절하지 않은 것은? ① 주어진 제약 조건과 현실을 무시하고 허황되더라도 기발한 아이디어를 도출하는 것이 핵심이다. ② 정보 수집과 분석을 통해 근본 원인을 파악하여 진짜 문제(Real Problem)를 정의하는 능력이다. ③ 창의적 발상 도구를 활용하여 현실에 적용할 수 있는 실용적인 결과를 얻어내는 목적 지향적 활동이다. ④ 새롭게 도출된 아이디어로 실제 공학 문제를 해결할 때 비로소 진정한 의미를 가진다. 정답 : ① 해설 : 창의성은 주어진 현실과 제약 조건을 무시해도 된다는 것은 대표적인 오해입니다. 허황된 아이디어는 실용성이 없어 올바른 공학적 문제 해결을 방해합니다. |

| 학습정리 |

| --- |

| 1) 공학의 정의와 공학자의 임무: 공학은 인간의 삶을 개선하기 위한 실용적 학문이며, 공학자는 문제를 찾아 최적의 솔루션을 '실행(하는 것)'하는 임무를 가짐. 2) 21세기 AI 시대 공학자의 필수 소양: 기초 지식 응용을 넘어 스스로 문제를 정의하는 능력, AI 도구 협업 및 다학제적 팀워크 능력이 필수적임. 3) 공학적 창의성의 올바른 이해: 단순한 공상이나 기발함이 아니라, 현실의 제약 조건 내에서 실용적인 최적해를 창출하는 목적 지향적인 문제 해결 능력임. |