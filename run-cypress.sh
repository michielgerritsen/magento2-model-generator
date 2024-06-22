echo "Running nuxt generate"
nuxt generate

echo "Running yarn preview"
nohup yarn preview &

echo "Running cypress install"
cypress install

echo "Running cypress run"
cypress run --config baseUrl=http://localhost:3000
