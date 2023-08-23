FROM node:18.17.0-alpine as base

ENV LANG C.UTF-8
RUN apk update && \
  apk upgrade

WORKDIR /app

FROM base as build

COPY --link package.json ./
COPY --link package-lock.json ./
COPY --link .npmrc ./

RUN npm cache clean --force && npm install --quiet
COPY --link . .

RUN npm run build \
    && npm prune

FROM base

COPY --from=build /app/.output /app/.output

CMD ["npm", "run", "start"]
