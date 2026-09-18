# v0.3.1 — Guide & Decision Flow Restore

- VDF 6.0.0 Stable/Freeze 유지. 엔진 규칙 변경 없음.
- 사용 방법 페이지에 Quick Start 4단계 복원.
- 범위 → 블록/정보유형 → Image/Shape → Gate → Card 의사결정 구조 복원.
- AI 제안 / 교수자 검토 / 제작 확정 역할 구분 추가.
- 6종 정보 유형과 Card A~F 관계 안내 복원.
- GitHub Pages 설정은 저장소명 기반 base 자동 계산을 유지.

# Changelog

## v0.3.0 — Release Freeze

- VDF Engine 6.0.0을 production Stable / Freeze로 확정
- App 버전과 Engine 버전을 분리 표기
- 6.1 / Minimal / Ablation 실험 엔진을 production runtime에서 제거
- 실험 기록을 `docs/archive/`로 이동
- 배포 UI에서 Audit/Ablation 패널 제거
- GitHub Pages 자동 배포 workflow 추가
- Known Limitations 및 Freeze 문서 추가
- Engine Registry의 외부 ZIP 등록 기능은 고급 검증용으로 유지

Engine rules.json은 변경하지 않았다.
