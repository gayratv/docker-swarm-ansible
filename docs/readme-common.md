1. установка docker
2. установка docker compose
3. добавление прав пользователя и перезагрузка сервера сервера чтобы наши права применились

006 - Ansible playbooks 6 пишем настройку сервера
https://www.notion.so/006-Ansible-playbooks-6-03ffb0926fbe43afba34bfd46e82a574

https://learn.purpleschool.ru/student/courses/c248cd0b-625d-4a40-a39d-2418e70d4fef/lessons/245f41a6-ec42-4d57-a57d-d20b16a8fc8f

ansible-playbook test.yml



Ansible official:
https://docs.ansible.com/ansible/latest/collections/community/docker/docsite/scenario_guide.html#ansible-collections-community-docker-docsite-scenario-guide

Requirements
You can install the Docker SDK for Python for Python 3.6 or later as follows:

$ pip install docker


DIGITAL OCEAN
How to Use Ansible to Install and Set Up Docker on Ubuntu 22.04
https://www.digitalocean.com/community/tutorials/how-to-use-ansible-to-install-and-set-up-docker-on-ubuntu-22-04

## Install Docker Engine on Ubuntu
https://docs.docker.com/engine/install/ubuntu/

buntu Kinetic 22.10
Ubuntu Jammy 22.04 (LTS)
Ubuntu Focal 20.04 (LTS)
Ubuntu Bionic 18.04 (LTS)

## How to Deploy Docker Swarm on Ubuntu 22.04 Step-by-Step
https://www.linuxtechi.com/how-to-deploy-docker-swarm-on-ubuntu/?utm_content=cmp-true

2. Install Docker CE on all the nodes
3. Once Docker is installed, add the currently logged-in user to the Docker group to avoid running Docker as a sudo user every time you run Docker.

$ sudo usermod -aG docker ${USER}
$ newgrp docker

Step 3) Verify Docker is running on all the nodes
sudo systemctl status docker

Step 4) Create Docker Swarm Cluster
$ sudo docker swarm init --advertise-addr 10.128.0.57
$ sudo docker swarm join --token SWMTKN-1-1k397 10.128.0.57:2377
sudo docker node ls


## Интересная реализация role docker
https://github.com/geerlingguy/ansible-role-docker/blob/master/tasks/main.yml


Обзор inventory
ansible-inventory -i inventory --list -y

-# manager - группа хостов
ansible -i inventory manager -m ping

// Any command that you would normally execute on a remote server over SSH can be run with Ansible on the servers specified in your inventory file. As an example, you can check disk usage on all servers with:

ansible -i inventory manager -a "df -h" -u root

// You can also execute Ansible modules via ad-hoc commands, similarly to what we’ve done before with the ping module for testing connection. For example, here’s how we can use the apt module to install the latest version of vim on all the servers in your inventory:

ansible -i inventory manager -m apt -a "name=vim state=latest"

// you would check the uptime of every host in the servers group:

ansible -i inventory manager -a "uptime" 

ansible-playbook -i inventory ping.yml --limit manager -e "ansible_user=root"
ansible-playbook -i inventory ping.yml

# init role
ansible-galaxy init roles/preconfig-do
ansible-galaxy init roles/template-test
ansible-galaxy init roles/docker-build2

# репозитарий с примером webserver
https://github.com/spacelift-io-blog-posts/Blog-Technical-Content/tree/master/ansible-roles

статья
https://spacelift.io/blog/ansible-roles

// ограничить только хостами manager
ansible-playbook -i inventory ping-role.yml --limit manager


ansible-playbook -i inventory ping-role.yml --list-hosts

ansible-playbook -i inventory preconfig-do-role.yml --limit manager

# Пользователь
ansible.posix.authorized_key module
https://docs.ansible.com/ansible/latest/collections/ansible/posix/authorized_key_module.html#examples

### git-clone test
ansible-playbook -i inventory roles/git-clone/tests/test.yml


### docker build
ansible-playbook -i inventory docker-build-role.yml

ansible-playbook -vvv -i inventory roles/docker-build/tests/test.yml
ansible-playbook -i inventory roles/docker-build/tests/test.yml

### swarm init
ansible-playbook -i inventory roles/swarm_init/tests/test.yml
ansible-playbook -i inventory swarm-init-show-token.yml

export ANSIBLE_CONFIG=~/ansible/ansible.cfg
ansible --version | grep "config file"

export ANSIBLE_CONFIG=~/ansible/ansible.cfg && ansible-playbook -i inventory swarm_init_role_test.yml 

#### создание сети ingres
ansible-playbook -i inventory docker-network-create-ingress.yml

результат - image:
localhost:5000/alari-code-docker-show-ip   v1


ansible-playbook -i inventory ping.yml --limit manager -e "ansible_user=root"


## Ansible работа с кешированными фактами

Испытал трудности с кешированием факта под windows /wsl
(нужно для Swarm Join)

решение:
1. создайте директорию ~/ansible
2. положите туда файл ansible.cfg

с таким содержимым
[defaults]
fact_caching = jsonfile
fact_caching_connection = ~/ansible/cache

3. создайте директорию ~/ansible/cache
4. перед запуском дайте команду

export ANSIBLE_CONFIG=~/ansible/ansible.cfg

Либо для верности скомбинируйте ее:

export ANSIBLE_CONFIG=~/ansible/ansible.cfg && ansible-playbook -i inventory swarm_init_role_test.yml

После этого в директории ~/ansible/cache у Вас появится файл с кешем

# Docker ingress сеть

создается автоматически при инициализации docker swarm

For external facing ingress connnetiion, service routing works this way,

ingress ==> gwbridge ==> ingress-sbox (its just a n/w namespae not a container) ==> ipvs ==> underlay

### создать overlay network my-overlay-network
docker network create --driver overlay --subnet 10.10.10.0/24 my-overlay-network


docker network inspect ingress | grep Subnet
"Subnet": "10.255.0.0/16",
docker network inspect docker_gwbridge | grep Subnet
"Subnet": "172.19.0.0/16",


I can get the overlay IP address for each container by executing ifconfig eth2

docker exec 2b0abe2956c6 ifconfig eth2 | grep addr

eth2      Link encap:Ethernet  HWaddr 02:42:0a:0a:0a:05
**inet addr**:10.10.10.5  Bcast:0.0.0.0  Mask:255.255.255.0
inet6 addr: fe80::42:aff:fe0a:a05/64 Scope:Link

Если контейнер подключен к owerlay сети на другой машине - то можно просто дать ping на другой хост
$ docker exec a1ca9a0d2364 ping 10.10.10.5

https://www.securitynik.com/2016/12/docker-networking-internals-container.html

### Ingress
Второй сетью, к которой подключены контейнеры, была сеть ingress. Ingress - это оверлейная сеть, но она устанавливается по умолчанию после запуска кластера swarm. Эта сеть используется для обеспечения связи при подключении к контейнерам из внешнего мира. В ней также происходит балансировка нагрузки, обеспечиваемая кластером swarm.

Балансировка нагрузки обрабатывается IPVS, который работает на контейнере, запускаемом docker swarm по умолчанию. Мы видим этот контейнер, подключенный к входящей сети (я использовал тот же веб-сервис, что и раньше, который открывает порт 8080, который затем сопоставляется с портом 80 на контейнерах):

docker service create --name webapp --replicas=3 --network my-overlay-network -p 8080:80

$ docker network inspect ingress

"ingress-sbox": {
"Name": "ingress-endpoint",


$ sudo iptables -t nat -n -L
Chain DOCKER-INGRESS (2 references)
tcp dpt:8080 to:172.19.0.2:8080

Вы видите правило, которое соответствует трафику, предназначенному для порта 8080, и перенаправляет его на 172.19.0.2. Мы видим, что 172.19.0.2 принадлежит контейнеру ingress-sbox, если проверим его интерфейсы:

Затем docker использует правила iptables mangle для маркировки пакетов на порт 8080 определенным номером, который затем будет использоваться IPVS для балансировки нагрузки на соответствующие контейнеры:

## Traefik обратный proxy для docker swarm
https://dockerswarm.rocks/traefik/

https://docs.docker.com/engine/swarm/networking/

## Работа с template
ansible-playbook -i inventory roles/template-test/tests/test.yml

ansible-playbook -i inventory roles/docker-insecure/tests/test.yml

## build service
//ansible-playbook -i inventory roles/git-clone/tests/test.yml

//ansible-playbook -i inventory roles/docker-build/tests/test.yml

ansible-playbook -i inventory docker-build-role.yml

cat /etc/docker/daemon.json
cd /git-repos2/docker-show-ip

docker image rm 38d65f2aa133

docker build -t ip .
docker build -t 10.16.0.2:5000/ip:latest .
docker build -t localhost:5000/ip:latest .

docker tag ip 10.16.0.2:5000/ip
docker tag ip localhost:5000/ip

docker push 10.16.0.2:5000/ip
docker push localhots:5000/ip:latest

docker info
docker search 10.16.0.2:5000/ip

curl -X GET http://10.16.0.2:5000/v2/_catalog
curl -X GET http://localhost:5000/v2/_catalog

docker image rm f23137cc45ee -f
docker image rm f23137cc45ee -f


docker pull 10.16.0.2:5000/docker-show-ip