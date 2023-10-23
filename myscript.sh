

docker stop lottery-book
docker rm lottery-book
docker build . -t lottery-book
docker run -d --name lottery-book -p 8889:8889 lottery-book