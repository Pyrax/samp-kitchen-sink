@echo off
setlocal enableDelayedExpansion

for /F %%G in ('dir /B/D ..\src\gamemodes\*.pwn') do (
    "compiler\pawncc.exe" "..\src\gamemodes\%%G" -o"server\gamemodes\%%~nG.amx" -i"..\src\includes" "-;" "-("
)

for /F %%G in ('dir /B/D ..\src\filterscripts\*.pwn') do (
    "compiler\pawncc.exe" "..\src\filterscripts\%%G" -o"server\filterscripts\%%~nG.amx" -i"..\src\includes" "-;" "-("
)