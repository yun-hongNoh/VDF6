# Derivation

Source of Truth: `rules.json`

Baseline rules SHA256: `c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5`

생성 절차:
1. VDF 6.0 `rules.json`을 deep clone
2. `semantic_boundary_layer`만 추가
3. 엔진 메타(version/status)만 Experimental로 갱신
4. `VDF6_규칙.md`는 Boundary section을 구조화 데이터에서 생성하고 6.0 규칙 Markdown을 verbatim append
5. `VDF6_지시문.md`는 Boundary instruction을 기존 6.0 downstream 판정 직전에 삽입
6. `contract.json`은 6.0과 동일
