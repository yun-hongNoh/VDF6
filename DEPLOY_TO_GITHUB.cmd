@echo off
setlocal
cd /d "%~dp0"

echo ==============================================
echo VDF Next - Build and Deploy to GitHub
echo ==============================================

if not exist ".git" (
  echo [ERROR] This folder is not a Git repository.
  echo Extract/copy this release into your cloned VDF6 repository first.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm was not found. Install Node.js LTS first.
  pause
  exit /b 1
)

where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] git was not found. Install Git for Windows first.
  pause
  exit /b 1
)

echo [1/5] Installing dependencies...
call npm install --include=dev --no-audit --no-fund
if errorlevel 1 goto :fail

echo [2/5] Building release...
call npm run build
if errorlevel 1 goto :fail

echo [3/5] Staging changes...
git add .

echo [4/5] Committing changes...
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Deploy VDF Next release"
  if errorlevel 1 goto :fail
) else (
  echo No new changes to commit.
)

echo [5/5] Pushing to GitHub...
git push
if errorlevel 1 goto :fail

echo.
echo [OK] Push completed. Check GitHub Actions for Pages deployment.
echo https://yun-hongnoh.github.io/VDF6/
pause
exit /b 0

:fail
echo.
echo [ERROR] Deployment stopped. Nothing after the failed step was executed.
pause
exit /b 1
