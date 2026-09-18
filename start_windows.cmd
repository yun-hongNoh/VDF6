@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js is required. Install Node.js LTS first.
  pause
  exit /b 1
)
if not exist node_modules (
  echo [SETUP] Installing packages...
  call npm install
  if errorlevel 1 goto :fail
)
echo [START] Local development server: http://127.0.0.1:5173
call npm run dev
goto :eof
:fail
echo [ERROR] Setup failed.
pause
exit /b 1
