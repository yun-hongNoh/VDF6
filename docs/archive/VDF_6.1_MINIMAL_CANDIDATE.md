# VDF 6.1 Candidate v0.2 — Minimal Correction

## 목적
VDF 6.0 Reference를 보존하면서 반복 관찰된 모호성만 최소 보정한다. 기존 6.1 HOLD의 강한 segmentation 규칙은 승계하지 않는다.

## 변경 3개
1. **Semantic block boundary** — 예시 수가 아니라 학습 의미 단위로 블록을 나눈다.
2. **Role-based scope** — 특정 코너명이 아니라 핵심 본문인지 보조 학습활동인지로 판단한다.
3. **Learning-center image gate** — 구체 사물이 있다는 사실 외에 그 사물 자체가 학습정보의 중심인지 확인한다.

## 명시적 비변경
- VDF 6.0 built-in rules.json
- 정보 유형 6종
- 카드 A~F와 프롬프트 문자열
- JSON contract
- 특정 provider/reasoning 전용 규칙
- block 개수 제한

## 테스트
Instant = baseline regression. Medium = robustness test. CASE-01~03에서 6.0의 좋은 판단을 보호한 뒤 CASE-04~06으로 일반화한다.
