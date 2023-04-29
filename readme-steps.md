
# 03 опционально - установить registry
ansible-playbook -i inventory roles/docker-registry-install/tests/test.yml

Проверка
docker pull ubuntu
docker tag ubuntu localhost:5000/ubuntu
docker push localhost:5000/ubuntu

--flush-cache clear the fact cache for every host in inventory

# Два скрипта запустить
ansible-playbook --flush-cache -i inventory all.yml

ansible-playbook -i inventory swarm_join_test.yml

# Выполнить только один скрипт
ansible-playbook --flush-cache -i inventory all.yml --tags swarm_init
 

# Проверка работы registry
curl -X GET http://10.16.0.2:5000/v2/_catalog
curl -X GET http://localhost:5000/v2/_catalog