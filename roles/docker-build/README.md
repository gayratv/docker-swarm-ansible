# Построить образ docker и запушить его

### Для запуска необходимо определить три переменные - смотри test

     vars:
      git_repository_version: latest
      git_repository_name: "ip-show"
      git_repository_destination_dir: "{{ git_repository_base_dir }}{{ git_repository_name  }}"

### Команды запуска

ansible-playbook -i inventory roles/docker-build/tests/test.yml

ansible-playbook -i inventory docker-build-role.yml

curl -X GET http://10.16.0.2:5000/v2/_catalog

docker image remove 10.16.0.2:5000/docker-show-ip

// чтобы определить переменные
ansible-playbook -i inventory all-swarm.yml --tags swarm_init