docker exec -t nginx.1.s2o4xer9ob3vfslhvladtetyq sh -c "apt-get update && apt-get install dnsutils -y && nslookup whoami”

docker exec -it nginx.1.s2o4xer9ob3vfslhvladtetyq bash

apt-get update

apt-get install dnsutils -y

apt-get install host

docker exec nginx.1.s2o4xer9ob3vfslhvladtetyq curl whoami

docker service create --name whoami  -p 8000:80 --network app_network2 containous/whoami