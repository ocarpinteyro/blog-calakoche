#!/usr/bin/env bash
echo -e "\n⚡️ Project Setup"

cat .env

yarn install

echo -e "\n⚡️ Building Project"

yarn export

cd out
ls -lsa
rm robots_prod.txt
ls -lsa
cd ..

echo -e "\n⚡️ Deploying Project into Firebase"

npm install firebase-tools

./node_modules/.bin/firebase use default

./node_modules/.bin/firebase deploy --token "$FIREBASE_TOKEN" --only hosting -m "Build $CIRCLE_BUILD_NUM"
