#!/bin/sh

npm i -D --global gulp
gulp
npm install
npm install -g nodemon
npm run start_dev