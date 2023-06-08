ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass deploy-role.yml

ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass avito-build-deploy.yml

docker service ls
docker service ps ip-show
