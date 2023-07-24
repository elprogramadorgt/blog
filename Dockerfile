FROM node:18.17-alpine as build


WORKDIR /app

COPY . .
RUN yarn
RUN yarn build

FROM node:18.17-alpine as deploy

WORKDIR /app

RUN rm -rf ./*

COPY --from=build /app/package.json .
COPY --from=build /app/build .
RUN yarn --prod


CMD ["node","-r dotenv/config build"]