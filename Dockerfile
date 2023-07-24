FROM node:18 AS build

# RUN npm i -g pnpm
# WORKDIR /app

# COPY package.json ./
# # COPY pnpm-lock.yaml ./
# RUN pnpm install
# COPY . ./
# RUN pnpm build

# FROM nginx:1.19-alpine
# COPY --from=build /app/public /usr/share/nginx/html

WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm build


COPY --from=build /app/build .
ENTRYPOINT [ "node" ]