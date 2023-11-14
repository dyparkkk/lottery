

docker stop lottery
docker rm lottery
docker build . -t lottery
docker run -d --name lottery -p 8889:8889 lottery