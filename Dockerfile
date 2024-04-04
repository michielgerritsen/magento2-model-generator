FROM node:18-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python

RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make
RUN npm install --quiet node-gyp -g

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN yarn install
RUN yarn run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD yarn install && yarn dev
