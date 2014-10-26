@echo off
setlocal enableDelayedExpansion 

for /F %%G in ('dir /B/D ..\src\gamemodes\*.pwn') do (
    "compiler\pawncc.exe" "..\src\gamemodes\%%G" -o"..\src\gamemodes\%%~nG.amx" -i"..\src\includes" "-;" "-("
)

for /F %%G in ('dir /B/D ..\src\filterscripts\*.pwn') do (
    "compiler\pawncc.exe" "..\src\filterscripts\%%G" -o"..\src\filterscripts\%%~nG.amx" -i"..\src\includes" "-;" "-("
)