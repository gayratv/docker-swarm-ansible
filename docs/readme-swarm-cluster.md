# Swarm cluster

docker service create --publish 3000:3000 --name ip --replicas=3 10.16.0.2:5000/ip-show

docker service ls
docker service ps ip

