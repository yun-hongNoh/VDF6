# GitHub Pages 배포 — Windows cmd.exe 기준

이 프로젝트는 GitHub Actions로 `main` 브랜치가 갱신될 때 자동 배포되도록 설정되어 있다. 저장소 이름은 무엇이든 사용할 수 있으며 Actions에서 Vite `base`를 자동 계산한다.

## 1. GitHub에서 빈 저장소 만들기

예: `vdf-next`

README 자동 생성은 하지 않아도 된다.

## 2. 프로젝트 폴더에서 cmd.exe 실행

```cmd
git init
git add .
git commit -m "VDF Next v0.3.0 release"
git branch -M main
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin main
```

## 3. GitHub Pages 설정

저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택한다.

그 뒤 **Actions** 탭의 `Deploy VDF Next to GitHub Pages` 작업이 완료되면 배포 URL이 표시된다.

## 4. 로컬 확인

Node.js LTS 설치 후 최초 한 번:

```cmd
npm install
```

실행:

```cmd
npm run dev
```

배포 빌드 확인:

```cmd
npm run build
```

`dist` 폴더가 생성되면 정상이다.
