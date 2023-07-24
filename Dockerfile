FROM node:18.17-alpine as base

RUN npm i -g pnpm

FROM base as build


WORKDIR /app


COPY . .
RUN pnpm i
RUN pnpm build

FROM node:18.17-alpine as deploy

WORKDIR /app

RUN rm -rf ./*

ENV PROTOCOL_HEADER="x-forwarded-proto"
ENV HOST_HEADER="x-forwarded-host node build"

COPY --from=build /app/package.json .
COPY --from=build /app/build .


CMD ["node","-r", "dotenv/config","build"]