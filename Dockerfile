# TODO: When production stage add, should migrate to multi-stage build.
FROM node:23.3-alpine3.19
WORKDIR /node/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "dev"]
