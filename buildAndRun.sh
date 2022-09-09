
docker build --build-arg authdomain=$1 --build-arg clientid=$2 -t demoapp  .
docker run -p 3000:3000 demoapp 