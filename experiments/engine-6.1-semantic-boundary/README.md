# VDF Engine 6.1 EXPERIMENTAL — Semantic Block Boundary Layer

VDF 6.0.0의 downstream 판단은 그대로 두고, 그 앞에 Final Semantic Block 선별 Layer만 추가한 실험 엔진 패키지다.

## 변경
- Semantic Candidate segmentation
- KEEP / MERGE / DROP / SPLIT
- CONTENT / NOTE / SYNTHESIS merge payload
- Same Topic Rule
- Visual Evidence Preservation
- optional internal Boundary Trace (`TRACE_MODE=ON`)

## 변경하지 않음
Image/Shape · Image Gate · R4 · R9 · Card A~F · info_type 6종 · subject traits 5종 · Prompt 6줄 · Final JSON contract.

## 설치
현재 VDF 앱의 Engine Registry에서 이 ZIP을 등록한다. 등록 후 명시적으로 ACTIVE로 적용해야 한다. 6.0은 계속 Production Stable이다.
