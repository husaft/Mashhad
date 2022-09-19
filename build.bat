@echo off

cd mashhad-lib
call npm run test
cd ..

cd mashhad-app
call npm run build
call npm run serve
cd ..
