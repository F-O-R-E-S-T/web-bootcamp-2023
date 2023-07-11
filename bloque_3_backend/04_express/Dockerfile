FROM node:latest

WORKDIR /app

COPY ["./package.json", "./package-lock.json", "/app/"]

RUN npm install

COPY [".", "/app"]

ENTRYPOINT ["npm", "run", "start"]
