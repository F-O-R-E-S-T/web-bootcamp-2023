#!/bin/bash

npm install
mkdir current_status
touch state.json .env
mv state.json current_status
cat .env.example >> .env
