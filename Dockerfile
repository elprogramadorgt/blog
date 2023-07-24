FROM node:18.17-alpine as build


WORKDIR /app

RUN npm i -g pnpm
COPY . .
RUN pnpm
RUN pnpm build

FROM node:18.17-alpine as deploy

WORKDIR /app

RUN rm -rf ./*

COPY --from=build /app/package.json .
COPY --from=build /app/build .
RUN pnpm --prod


CMD ["node","-r dotenv/config build"]