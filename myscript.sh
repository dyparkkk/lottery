

docker stop lottery-team
docker rm lottery-team
docker build . -t lottery-team
docker run -d --name lottery-team -p 8889:8889 lottery-team