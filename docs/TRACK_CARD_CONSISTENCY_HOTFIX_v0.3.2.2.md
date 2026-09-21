# v0.3.2.2 Track–Card Consistency HOTFIX

## 목적
교수자의 표현 방식(track)을 유일한 명시적 표현 source of truth로 사용한다. Card 선택은 이미지 배치 선택일 뿐 track을 변경하지 않는다.

## 변경
- Shape/Text 상태에서 Card override가 남아 있어도 image로 자동 승격하지 않음.
- `track !== image`이면 card/prompt/image warning은 최종 evaluation에서 비활성화.
- Decision Review의 subject/Card/traits/Image Gate UI는 final state가 실제 image일 때만 노출.
- Shape로 전환할 때 image override 데이터는 review state에 보존되지만 실행 결과에서는 dormant 상태. 다시 Image로 전환하면 복원 가능.
- Engine 6.0/6.1 규칙과 Card A~F canonical prompt는 변경하지 않음.

## 핵심 금지 상태
`presentationTrack=shape`이면서 Card/Image Gate/Image Prompt가 활성 상태인 결과를 허용하지 않는다.
