

docker stop lottery
docker rm lottery
docker build . -t lottery
docker run -d --name lottery -p 8888:8888 lottery