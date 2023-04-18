003 - 3  Docker volumes volume в Dockerfile
https://www.notion.so/6-Docker-volumes-422072baa7b54c2c89351664ba047b01?p=87fdc1de82a44a2f89c3928449eee083&pm=s

Пример shared volume

При docker run подключили volume и получили персистентное хранилище

Приложение пишет в директорию data файл req

docker build -t demo4-1:latest .
docker image rm demo4-1:latest 
docker image inspect demo4-1:latest

docker run --name cont3 -d -p 3000:3000 demo4-1

curl localhost:3000/set?id=245
curl localhost:3000/get
curl "127.0.0.1:3000/set?id=256"


docker volume create volume4-demo
docker run --name cont4 -d -p 3000:3000 -v volume4-demo:/opt/app/data demo4-1
docker rm -f cont4
docker volume ls


docker image rm demo4-1:latest && docker build -t demo4-1:latest .
docker build -t demo4-1:latest .

docker volume inspect volume4-demo

"Mountpoint": "/var/lib/docker/volumes/volume4-demo/_data",
ls /var/lib/docker/volumes/volume4-demo/_data
