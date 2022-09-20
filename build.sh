#!/bin/sh

cd mashhad-lib
npm run test
cd ..

cd mashhad-app
npm run build
npm run serve
cd ..
