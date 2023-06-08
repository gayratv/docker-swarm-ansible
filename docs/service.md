CREATE A SERVICE THAT USES A BIND-MOUNTED HOST DIRECTORY
The following example bind-mounts a host directory at /path/in/container in the containers backing the service:

$ docker service create \
--name my-service \
--mount type=bind,source=/path/on/host,destination=/path/in/container \
nginx:alpine

Подскажите пожалуйста откуда взять параметр node.role для команды
docker service create --constraint

Параметры 
node.id
node.hostname
можно посмотреть в команде

docker node ls

node.role может быть manager или worker
--constraint 'node.role == manager'

Add or remove label metadata
https://docs.docker.com/engine/swarm/manage-nodes/#add-or-remove-label-metadata

Pass the --label-add flag once for each node label you want to add:

```bash 
docker node update --label-add avito-heat ans1
```

docker node inspect ans2 --pretty

### node.labels
Наверно самое удобное будет задать labels для определения тех нод на которых надо развернуть сервис

--constraint node.labels.type==queue

node.labels.security==high