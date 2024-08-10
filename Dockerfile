FROM node:18.17-alpine AS base

RUN npm i -g pnpm

FROM base AS build


WORKDIR /app


COPY _env .env
COPY . .

RUN pnpm i
RUN pnpm build

FROM node:18.17-alpine AS deploy

WORKDIR /app

RUN rm -rf ./*

ENV PROTOCOL_HEADER="x-forwarded-proto"
ENV HOST_HEADER="x-forwarded-host node build"

COPY --from=build /app/package.json .
COPY --from=build /app/build .


CMD ["node","index.js"]