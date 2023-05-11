
--flush-cache clear the fact cache for every host in inventory

# Два скрипта запустить
ansible-playbook --flush-cache -i inventory all.yml

ansible-playbook -i inventory roles/swarm_init/tests/test.yml
ansible-playbook -i inventory swarm_join_test.yml

### Закачать репозитарии и сбилдить образы
ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  docker-build-role-all-git.yml

### Развернуть образы на сервер
ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  deploy-role.yml



# Выполнить только один скрипт
ansible-playbook --flush-cache -i inventory all.yml --tags swarm_init
 

# Проверка работы registry
curl -X GET http://10.16.0.2:5000/v2/_catalog
curl -X GET http://localhost:5000/v2/_catalog