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
echo.
echo [START] LAN development mode
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do echo   Mobile candidate: http://%%a:5173
 echo   If Windows Firewall asks, allow access on Private networks only.
echo.
call npm run dev:lan
goto :eof
:fail
echo [ERROR] Setup failed.
pause
exit /b 1
