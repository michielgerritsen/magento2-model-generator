docker build -t magento2-model-generator . && \
docker run --rm -it -v $(pwd):/usr/src/nuxt-app --name m2mg -p 3000:3000 magento2-model-generator
