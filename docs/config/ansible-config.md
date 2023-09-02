<<<<<<< HEAD
скопируй файл в 
~/ansible
=======
# Подготовка
скопируй файл в 
/etc/ansible

в windows конфигурация не работает в текущей директории

посмотреть файл конфигурации
ansible-config view

если все работает то в директории ~/.ansible появится cache

# Проверка IP
ansible-playbook --flush-cache -i inventory --vault-password-file ~/gayrat/.pass swarm-init-get-master-ip.yml

ansible-playbook  -i inventory --vault-password-file ~/gayrat/.pass swarm-init-get-master-ip.yml


>>>>>>> origin/master
