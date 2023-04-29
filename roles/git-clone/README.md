Role Name
=========

Клонирует репозитарий в директорию
 covered by Ansible itself or the role should be mentioned here. For instance, if the role uses the EC2 module, it may be a good idea to mention in this section that the boto package is required.

Role Variables
--------------

Ссылка на репозитарий
Директория назначения
Можно задать branch

ansible-playbook -i inventory roles/git-clone-local/tests/test.yml


sudo adduser docker
groups docker

sudo usermod -aG docker docker


sudo adduser --gecos "" --disabled-password --ingroup docker docker
sudo passwd docker
