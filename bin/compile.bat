@echo off
setlocal enableDelayedExpansion 

@echo on
for /F %%G in ('dir /B/D ..\src\gamemodes\*.pwn') do (
    "compiler\pawncc.exe" "..\src\gamemodes\%%G" -o"..\src\gamemodes\%%~nG.amx" -i"..\src\includes" "-;" "-("
)