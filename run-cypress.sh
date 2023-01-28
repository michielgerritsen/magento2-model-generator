echo "Running nuxt generate"
nuxt generate

echo "Running yarn start"
nohup yarn start &

echo "Running cypress install"
cypress install

echo "Running cypress run"
cypress run --config baseUrl=http://localhost:3000
