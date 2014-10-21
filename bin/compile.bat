@echo off 
setlocal enableDelayedExpansion 

for /F %%f in ('dir /B/D ..\src\gamemodes') do (
  set FILENAME=..\src\gamemodes\%%f
  start "" compiler/pawncc.exe "../src/gamemodes/%%f" -o"src\gamemodes\mode.amx" -i"./src/includes" "-;" "-("
)