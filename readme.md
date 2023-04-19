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

ansible-playbook -i inventory ping.yml --limit manager
ansible-playbook -i inventory ping.yml

# init role
ansible-galaxy init roles/preconfig-do

репозитарий с примером webserver
https://github.com/spacelift-io-blog-posts/Blog-Technical-Content/tree/master/ansible-roles

статья
https://spacelift.io/blog/ansible-roles

// ограничить только хостами manager
ansible-playbook -i inventory ping-role.yml --limit manager

ansible-playbook -i inventory ping-role.yml --list-hosts

ansible-playbook -i inventory preconfig-do-role.yml --limit manager