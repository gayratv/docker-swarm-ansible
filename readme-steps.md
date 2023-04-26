# 01 Добавить user docker

Сначала под пользователем root добавим пользователя docker под которым далее будет устанавливать
Пользователю дадим права sudo

ansible-playbook -i inventory 01-users-add-role.yml --extra-vars "ansible_user=root" --limit manager


# 02 Сделать преконфиг для хостов manager
ansible-playbook -i inventory preconfig-do-role.yml --limit manager 

# 03 опционально - установить registry
ansible-playbook -i inventory roles/docker-registry-install/tests/test.yml

Проверка
docker pull ubuntu
docker tag ubuntu localhost:5000/ubuntu
docker push localhost:5000/ubuntu


ansible-playbook -i inventory all.yml

ansible-playbook -i inventory all-swarm.yml 

