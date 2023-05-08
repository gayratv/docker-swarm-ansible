Показывает все IP адреса

// мапит порт 4000 хоста на порт 3000 docker

docker build -t rmq-test .

docker run -d -p 4000:3000

https://www.notion.so/002-5-Docker-bridge-6e183e1ebfad4027a31d76997ab06fcf

docker network connect my-network container-ip1

docker image prune -a -f                         Удалить все неиспользуемые Docker-образы:
docker rmi -f $(docker images -q)                Принудительно удалить все Docker-образы
docker container prune -f                        Удалить все остановленные (неиспользуемые) Docker-контейнеры:
docker rm -f $(docker ps -a -q)                  Принудительно удалить все Docker-контейнеры, включая запущенные контейнеры:


rimraf ./build && tsc 
docker container prune -f && docker image prune -a -f && docker build -t rmq-test .

docker run -it rmq-test

docker-compose down 
docker-compose build
docker-compose up

apt-get update
apt-get install iproute2
ip addr show
ip addr show eth0


apt-get install iputils-ping

