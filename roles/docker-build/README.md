# Построить образ docker и запушить его

ansible-playbook -i inventory roles/docker-build/tests/test.yml

ansible-playbook -i inventory docker-build-role.yml

// чтобы определить переменные
ansible-playbook -i inventory all-swarm.yml --tags swarm_init