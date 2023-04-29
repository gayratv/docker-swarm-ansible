# Построить образ docker и запушить его

ansible-playbook -i inventory roles/docker-build/tests/test.yml

ansible-playbook -i inventory docker-build-role.yml

curl -X GET http://10.16.0.2:5000/v2/_catalog

docker image remove 10.16.0.2:5000/docker-show-ip

// чтобы определить переменные
ansible-playbook -i inventory all-swarm.yml --tags swarm_init