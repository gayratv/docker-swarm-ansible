ansible-vault encrypt --vault-id dev-vault --vault-password-file .pass group_vars/vault.yml

// поместил в wsl
// убрал флаг executable
// chmod -x .pass

ansible-vault encrypt  --vault-password-file ~/gayrat/.pass group_vars/all/vault.yml
ansible-vault decrypt --vault-password-file ~/gayrat/.pass group_vars/all/vault.yml

ansible-playbook -i inventory all.yml --tags "deploy" --ask-vault-pass
ansible-playbook vault-test.yml --vault-password-file ~/gayrat/.pass 

ansible-vault create --vault-id dev@.pass group_vars/vault.yml

.pass - название файла с паролем

## Create a service with secrets (--secret)
docker service create --name redis --secret secret.json redis:3.0.6

--secret source=ssh-key,target=ssh \

ansible-playbook -i inventory all.yml --tags "deploy" --ask-vault-pass

ansible-vault encrypt group_vars/all/vault.yml --vault-id dev@prompt

dev - это роль для vault

prompt - ansible должен запросить пароль






ansible-playbook -i inventory all.yml --tags "deploy" --vault-id dev@.pass

переданы данные с паролем для vault