

docker stop lottery
docker rm lottery
docker build . -t lottery
docker run -d --name lottery -p 8880:8880 lottery