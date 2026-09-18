# VDF Next v0.3.0

대학 온라인 강의노트를 VDF 기준으로 블록 계획하고, AI Prompt Bridge 결과를 검사한 뒤 제작에 활용하는 정적 웹앱이다.

## Release baseline

- **App:** v0.3.0
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
