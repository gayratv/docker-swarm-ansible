How to Use Ansible to Install and Set Up Docker on Ubuntu 22.04
https://www.digitalocean.com/community/tutorials/how-to-use-ansible-to-install-and-set-up-docker-on-ubuntu-22-04


Docker Guide
https://docs.ansible.com/ansible/latest/collections/community/docker/docsite/scenario_guide.html


Ansible / Docker Swarm Use case
https://williamburillon.com/articles/ansible-docker-swarm

https://habr.com/ru/articles/334004/
docker network inspect ingress

Docker swarm и балансировка нагрузки по нодам
https://habr.com/ru/companies/englishdom/articles/526308/


Поэтому в случае отказа Web 2 сервера, мы сами проведем балансировку, воспользовавшись командой:

docker service update  --force 


Docker Swarm имеет механизм placement, который позволяет указать конкретному сервису на каких серверах с каким label запускать контейнеры. 

Для решения проблемы с балансировкой в Docker документации предлагается установить лимиты на ресурсы и зарезервировать в Docker Swarm необходимые нам мощности. Такой подход в связке с placement казался самым подходящим, чтобы закрыть нашу задачу.

резервация ресурсов под контейнер в Docker Swarm.

version: '3.4'
services:
php-fpm:
image: php-fpm:latest
deploy:
replicas: 2
update_config:
parallelism: 1
delay: 1s
order: start-first
restart_policy:
condition: on-failure
resources:
reservations:
cpus: '0.5'

**запусти 4 сервиса swarm с mode global**

https://gitlab.com/englishdom/swarm_manager


=================
Настройка связки Nginx / LetsEncrypt в Docker Swarm
https://habr.com/ru/articles/495890/
