FROM node:10.15.3-alpine

RUN apk update
RUN apk add --no-cache bash

WORKDIR /usr/src/app
COPY . .

ARG NODE_ENV
ARG HOST

RUN echo ${NODE_ENV}
RUN yarn install

EXPOSE 3000
CMD ["yarn", "dev"]
