docker exec -t nginx.1.s2o4xer9ob3vfslhvladtetyq sh -c "apt-get update && apt-get install dnsutils -y && nslookup whoami”

docker exec -it nginx.1.s2o4xer9ob3vfslhvladtetyq bash

apt-get update

apt-get install dnsutils -y

apt-get install host

docker exec nginx.1.s2o4xer9ob3vfslhvladtetyq curl whoami

docker service create --name whoami  -p 8000:80 --network app_network2 containous/whoami

тестовый образ
nicolaka/netshoot




docker image prune -a -f                         Удалить все неиспользуемые Docker-образы:
docker rmi -f $(docker images -q)                Принудительно удалить все Docker-образы
docker container prune -f                        Удалить все остановленные (неиспользуемые) Docker-контейнеры:
docker rm -f $(docker ps -a -q)                  Принудительно удалить все Docker-контейнеры, включая запущенные контейнеры:








https://docker-tutorial.schoolofdevops.com/troubleshooting-toolkit/

### SWARM Networking Deep Dive
https://docker-tutorial.schoolofdevops.com/swarm-networking-deepdive/


# References

CNM and Libnetwork https://github.com/docker/libnetwork/blob/master/docs/design.md

How VXLANs work ? https://youtu.be/Jqm_4TMmQz8?t=32s (watch from 00.32 to xx.xx) https://www.youtube.com/watch?v=YNqKDI_bnPM

Overlay Tutorial https://neuvector.com/network-security/docker-swarm-container-networking/

Docker Networking Tutorial - Learning by Practicing https://www.securitynik.com/2016/12/docker-networking-internals-container.html

Swarm networks https://docs.docker.com/v17.09/engine/swarm/networking/

Ip cheatsheet https://access.redhat.com/sites/default/files/attachments/rh_ip_command_cheatsheet_1214_jcs_print.pdf

Overlay issues https://github.com/moby/moby/issues/30820

Network Troubleshooting https://success.docker.com/article/troubleshooting-container-networking

Connect Service to Multiple Networks: https://www.slideshare.net/SreenivasMakam/docker-networking-common-issues-and-troubleshooting-techniques