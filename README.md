> Current hotfix: **v0.3.2.6 Visual Entity Normalization**

# VDF Next v0.3.2.2

대학 온라인 강의노트를 VDF 기준으로 블록 계획하고, AI Prompt Bridge 결과를 검사한 뒤 제작에 활용하는 정적 웹앱이다.

## Release baseline

- **App:** v0.3.2.2
- **Engine:** VDF 6.0.0 — Reference / Stable / Freeze
- **Source of Truth:** `src/domain/vdf/rules.json`
- **rules.json SHA256:** `c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5`

실험 6.1 계열 엔진은 production runtime에서 제외했다. 실험 기록은 `docs/archive/`에만 보존한다.

## 핵심 흐름

`계획 만들기 → 계획 검사 → 결과 확인 → 제작 활용`

Prompt Bridge는 API 키를 요구하지 않는다. 앱이 실행 프롬프트를 만들면 사용자가 ChatGPT/Gemini/Claude 등 외부 AI에 붙여넣고 JSON 결과를 다시 앱에 넣는다.

## 로컬 실행

Windows에서는 `start_windows.cmd`를 사용할 수 있다. 또는:

```cmd
npm install
npm run dev
```

## GitHub Pages

자동 배포 workflow가 포함되어 있다. 자세한 절차는 `docs/DEPLOY_GITHUB_PAGES.md` 참고.

## Release 문서

- `docs/VDF_6.0_FREEZE.md`
- `docs/KNOWN_LIMITATIONS.md`
- `docs/EXPERIMENT_ARCHIVE.md`
- `docs/DEPLOY_GITHUB_PAGES.md`


## v0.3.1.1 사용 안내 복원
배포용 엔진은 VDF 6.0.0 Freeze를 유지하면서, Quick Start · VDF 의사결정 구조 · AI 제안/교수자 검토 · 관계/카드 안내를 사용 방법 화면에 복원했습니다.



## v0.3.2.2 Track–Card Consistency Hotfix

- Card 선택은 더 이상 Shape/Text를 Image로 자동 승격하지 않습니다.
- 표현 방식(track)은 교수자가 명시적으로 선택한 값이 최종 source of truth입니다.
- Shape/Text 상태에서는 subject/Card/traits/Image Gate/Image Prompt가 실행 결과에서 비활성화됩니다.
- 기존 image override 값은 삭제하지 않고 dormant 상태로 보존하여 다시 Image로 돌아왔을 때 재사용할 수 있습니다.

## v0.3.2.1 Subject Propagation Hotfix

Image track에서 `subject`가 비어 있으면 Prompt를 정상 산출물로 내보내지 않습니다. 기존 image block에서 Card만 바꾸면 AI subject를 보존하며, 교수자가 subject를 수정한 경우 그 값이 최종 Prompt에 우선합니다.

## Professor Override Completion

교수자 검토에서 표현 방식(글 중심/도형/이미지), 이미지 대상, Card, 기존 5개 subject trait를 수정할 수 있으며, 최종 SVG/Image Prompt는 교수자 최종 상태를 기준으로 재계산됩니다. Engine 6.0.0과 Engine 6.1 Semantic Boundary 규칙은 변경하지 않았습니다.


### v0.3.2.5 hotfix
Shape → Image 전환 시 subject 자동 초안을 학습내용 요약문이 아닌 원문 기반 시각 대상·상태 중심으로 추출합니다. 자세한 내용은 `docs/VISUAL_ENTITY_SUBJECT_BOOTSTRAP_HOTFIX_v0.3.2.5.md`를 참조하세요.
