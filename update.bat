@echo off 

setlocal EnableDelayedExpansion

REM Menghasilkan string acak dengan panjang tertentu
set "panjang=10"
set "karakter=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

REM Inisialisasi variabel string acak
set "randomString="

REM Loop untuk membangun string acak
for /L %%i in (1,1,%panjang%) do (
    set /a "randomIndex=!random! %% 62"
    for /L %%j in (!randomIndex!,1,!randomIndex!) do (
        set "randomString=!randomString!!karakter:~%%j,1!"
    )
)

echo proccess update git..

git add .

git pull

git commit -m "update %randomString%"

git push

echo selesai

pause

@REM exit
