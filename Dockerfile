FROM node:18.17.0-alpine

ENV LANG C.UTF-8
RUN apk update && \
  apk upgrade

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY .npmrc ./

RUN npm cache clean --force && npm install --quiet
COPY . .

RUN npm rebuild \
    && npm install -g nuxi \
    && npm run build

# COPY .output ./

CMD ["npm", "run", "start"]
