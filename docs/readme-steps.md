
--flush-cache clear the fact cache for every host in inventory

# Два скрипта запустить
ansible-playbook --flush-cache -i inventory --vault-password-file ~/gayrat/.pass all.yml

была проблема в swarm_init - поправил
//ansible-playbook --flush-cache -i inventory --vault-password-file ~/gayrat/.pass swarm-init-show-token.yml
//ansible-playbook --flush-cache -i inventory --vault-password-file ~/gayrat/.pass swarm_init_role_test.yml
// ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass test-swarm-join.yml



### Если завис полсле перезагрузи то начать со второго шага
ansible-playbook --flush-cache -i inventory --vault-password-file ~/gayrat/.pass all-from02.yml
ansible-playbook --flush-cache -i inventory --vault-password-file ~/gayrat/.pass all-from03.yml

ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  roles/swarm_init/tests/test.yml
ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass swarm_join_test.yml

### Закачать репозитарии и сбилдить образы
ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  docker-build-role-all-git.yml

### Развернуть образы на сервер
ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  deploy-role.yml



# Выполнить только один скрипт
ansible-playbook --flush-cache -i inventory all.yml --tags swarm_init
 

# Проверка работы registry
curl -X GET http://212.113.120.139:5000/v2/_catalog
curl -X GET http://localhost:5000/v2/_catalog