# Subject Propagation Hotfix v0.3.2.1

## 목적

Professor Override 이후 Image Prompt의 `subject`가 공란인 상태로 6줄 Prompt가 생성되는 것을 막는다.

## Source of Truth

1. Professor `subject` override
2. AI-generated block `subject`
3. 둘 다 없으면 Prompt 생성 보류 + `image_subject` warning

원문에 없는 subject를 코드가 새로 추론하거나 생성하지 않는다.

## 회귀 보호

- Card A~F canonical fragment는 변경하지 않는다.
- Card override 시 기존 AI subject를 유지한다.
- Shape→Image에서 subject가 없으면 Card를 골라도 Prompt는 생성하지 않는다.
- Subject 입력 후에는 현재 Card/traits 기준으로 6줄 Prompt 전체를 다시 조립한다.
- Engine 6.0.0과 Engine 6.1 EXPERIMENTAL 규칙은 변경하지 않는다.
