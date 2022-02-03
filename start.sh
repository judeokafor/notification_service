#!/bin/bash

FILE=.env
FILE_2=config/service-account.json
cp staging.npmrc .npmrc

echo
echo "searching for dotenv file..."
if [ ! -f "$FILE" ]; then
  echo
  echo "dotenv file does not exist, file created...OK"
  touch .env
else
  echo
  echo "dotenv file found...OK"

fi
echo

echo "searching for google application credentials json file..."

if [ ! -f "$FILE_2" ]; then
  echo
  echo "google application credentials file not found, please add service-account.json file to config directory"
  echo
  exit 1
else
  echo
  echo "google application credentials...OK"
fi

echo

echo "searching for google application credentials environment variable..."

if [[ -z "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
  echo
  echo "GOOGLE_APPLICATION_CREDENTIALS variable is not set, please configure"
  echo
  exit 1
else
  echo
  echo "google application credentials...OK"
fi

echo
echo "authenticating with google artifact registry..."

npm run artifactregistry-login .npmrc

echo
echo "starting service container on port 9090..."
docker-compose up -d --build || echo "failed to start container" && exit 1

echo "completed!"
exit 0
