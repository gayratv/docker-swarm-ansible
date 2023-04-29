# Swarm cluster

ansible-playbook -i inventory docker-build-role.yml
curl -X GET http://10.16.0.2:5000/v2/_catalog

docker service create --publish 3000:3000 --name ip --replicas=3 10.16.0.2:5000/docker-show-ip

docker service ls
docker service ps ip

