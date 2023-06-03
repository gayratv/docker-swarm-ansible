### Inventory
в настоящий момент представлена для beget

## Сбилдить образ из репозитария

ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass git-clone.yml
клонирует в директорию "/git-repos2/avito"

## Формирование необходимых переменных
запусти

ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  roles/swarm_init/tests/test.yml