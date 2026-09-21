# v0.3.2.6 Visual Entity Normalization HOTFIX

## 목적
v0.3.2.5의 Visual Entity Subject Bootstrap이 설명문 오염은 줄였지만, `동전 펀치기와 포도주 압착기; 최초의 금속 활자 인쇄기`처럼 이미지 생성용 병렬 개체 목록으로는 아직 덜 정돈된 출력을 만들었다. 이번 패치는 subject bootstrap 결과만 정규화한다.

## 규칙
- 원문 title/slots 밖의 새 개체·사실을 추가하지 않는다.
- 임의 영어 번역과 레이아웃 지시를 추가하지 않는다.
- 병렬 접속 표현은 개체 목록으로 분리한다.
- 행동 설명이 붙은 결과 개체는 원문에 존재하는 개체명만 남긴다.
- 교수자 입력 subject와 기존 AI image subject는 절대 bootstrap으로 덮어쓰지 않는다.

## Gutenberg 회귀 기대
입력 근거:
- `동전 펀치기와 포도주 압착기 방식을 결합`
- `최초의 금속 활자 인쇄기 발명`

기대 bootstrap:
`동전 펀치기, 포도주 압착기, 금속 활자 인쇄기`

## 비변경 영역
Engine 6.0/6.1 규칙, Card A–F canonical fragments, Prompt 6줄 구조, Track/Card/Gate 동작은 변경하지 않는다.
