# v0.3.2.5 — Visual Entity Subject Bootstrap HOTFIX

## 목적
Shape → Image 교수자 Override 시 기존 AI subject가 없는 블록에서 `title + slots` 전체를 요약문처럼 이어붙이던 v0.3.2.4 bootstrap을 보정한다.

핵심 원칙은 다음과 같다.

> subject bootstrap은 학습내용 요약이 아니라, 원문에 이미 존재하는 시각 대상·상태 후보를 보존하는 보조 초안이어야 한다.

## 변경
- 자동 subject에서 제목을 기본적으로 제외한다.
- 질문·고민·설명·정의 같은 비시각적 서술만 있는 slot은 제외한다.
- `... 방식을 결합`, `... 발명` 같은 서술 꼬리는 제거하고 원문에 있는 대상 표현을 남긴다.
- 새로운 사물, 사실, 번역, 배치 지시는 생성하지 않는다.
- 유효한 slot 후보가 하나도 없을 때만 title을 fallback으로 사용한다.
- 교수자가 subject를 수정하면 기존처럼 교수자 값이 최종 source of truth다.

## 대표 회귀
입력:
- 중세 시대의 대량 인쇄 고민
- 동전 펀치기와 포도주 압착기 방식을 결합
- 최초의 금속 활자 인쇄기 발명

v0.3.2.4:
`구텐베르크 인쇄기의 이종 결합 — 중세 시대의 대량 인쇄 고민; 동전 펀치기와 포도주 압착기 방식을 결합; 최초의 금속 활자 인쇄기 발명`

v0.3.2.5:
`동전 펀치기와 포도주 압착기; 최초의 금속 활자 인쇄기`

## 비변경
- Engine 6.0 / 6.1 rules
- Card A~F canonical prompt fragments
- Prompt 6줄 형식
- Image Gate
- subject traits 5종
- Final JSON contract
