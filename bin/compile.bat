@echo off
setlocal enableDelayedExpansion

Echo Compiling gamemodes...
for /F %%G in ('dir /B/D ..\src\gamemodes\*.pwn') do (
    Echo src\gamemodes\%%~nxG
    "compiler\pawncc.exe" "..\src\gamemodes\%%G" -o"server\gamemodes\%%~nG.amx" -i"..\src\includes" "-;" "-("
)

Echo Compiling filterscripts...
for /F %%G in ('dir /B/D ..\src\filterscripts\*.pwn') do (
    Echo src\filterscripts\%%~nxG
    "compiler\pawncc.exe" "..\src\filterscripts\%%G" -o"server\filterscripts\%%~nG.amx" -i"..\src\includes" "-;" "-("
)