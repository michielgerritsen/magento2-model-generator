# Magento 2 Model Generator

With this app, you can create models for Magento 2 very fast. If you are not sure what a model in Magento 2 is, I can recommend you to read [this article](https://www.michiel-gerritsen.com/where-to-place-code-in-a-magento-2-module) (TLDR: It's everything that you need to connect to your database).

Writing models can become cumbersome, as you need to write a lot of boilerplate code which is sort of the same for every model you need to make.

This app tries to take the cumbersome out of your hands and generate the code for you.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Using docker

Build the image:

```bash
docker build -t magento2-model-generator .
```

Run the container:

```bash
docker run --rm -it -v $(pwd):/usr/src/nuxt-app --name m2mg -p 3000:3000 magento2-model-generator
```

or simply use:

```bash
sh run-docker.sh
```
