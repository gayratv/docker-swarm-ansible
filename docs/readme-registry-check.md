docker pull hello-world
docker tag hello-world 10.16.0.2:5000/hello-world
docker tag hello-world localhost:5000/hello-world


docker push 10.16.0.2:5000/hello-world
docker push localhost:5000/hello-world
curl -X GET http://10.16.0.2:5000/v2/_catalog
curl -X GET http://localhost:5000/v2/_catalog

docker pull 10.16.0.2:5000/docker-show-ip
docker pull localhost:5000/hello-world

1.Create a self-signed SSL certificate for your Docker registry using the following command:

openssl req -newkey rsa:4096 -nodes -sha256 -keyout domain.key -x509 -days 365 -out domain.crt

sudo nano /etc/docker/config.yml
sudo nano /etc/docker/daemon.json

{
"insecure-registries" : ["10.16.0.2:5000"]
}

sudo systemctl restart docker
docker info

# Выписать сертификат
https://docs.docker.com/registry/insecure/

cd ~
openssl req -newkey rsa:4096 -nodes -sha256 -keyout domain.key -x509 -days 365 -out domain.crt

sudo mkdir -p /etc/docker/certs.d/10.16.0.2:5000/
sudo cp domain.crt /etc/docker/certs.d/10.16.0.2:5000/

sudo nano /etc/docker/daemon.json
{
"insecure-registries" : ["10.16.0.2:5000"]
}

docker info
sudo systemctl restart docker


# ****************************************

docker service create --publish 3000:3000 --name ip localhost:5000/hello-world

docker service ls

docker service ps ip

docker node ls

docker service create --publish 3000:3000 --name ip localhost:5000/docker-show-ip

docker service create --publish 3000:3000 --name ip --replicas=3 localhost:5000/docker-show-ip

docker pull localhost:5000/docker-show-ip

docker service create --publish 3000:3000 --name ip --replicas=3 10.16.0.2:5000/docker-show-ip

docker service scale

docker pull localhost:5000/docker-show-ip
docker pull 10.16.0.2:5000/docker-show-ip