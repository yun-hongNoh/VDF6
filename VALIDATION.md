# Validation — VDF Next v0.3.1 Release

## PASS

- `src/domain/vdf/rules.json` SHA256 = `c20dae4c893d4455069b90fe2257239af69ca4cd247505b4ed5c69d3b2d5e1d5`
- Production 기본 Engine = VDF 6.0.0 Reference / Stable
- 실험 6.1 / Minimal / Ablation ZIP은 `public/` 런타임에서 제거
- 실험 문서는 `docs/archive/`로 이동
- GitHub Pages workflow 포함
- Vite Pages base는 GitHub 저장소명에서 자동 계산
- package version = 0.3.0

## Build note

현재 실행 환경에서는 `npm install --ignore-scripts`가 네트워크/시간 제한으로 완료되지 않아 의존성을 설치하지 못했다. 따라서 이 환경에서 최종 Vite production build를 완료하지 못했다. 이는 TypeScript/Vite 오류가 확인되었다는 의미가 아니라, React/JSZip 등 의존 모듈이 설치되지 않아 빌드가 시작되지 못한 상태다.

배포 전 로컬 또는 GitHub Actions에서 다음이 성공하는지 확인한다.

```cmd
npm install
npm run build
```

GitHub Actions workflow는 동일 절차로 자동 빌드한다.
