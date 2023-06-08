### Inventory
в настоящий момент представлена для beget

## Сбилдить образ из репозитария

клонирует в директорию "/git-repos2/avito"

ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass avito-build-deploy.yml

## Перечень задач
ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass --tags "avito-heat" --list-tasks  docker-build-clone-avito.yml

## переменную обновить
ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  roles/swarm_init/tests/test.yml

## Запустить сервис руками

docker service create --name avito-heat --limit-memory 512M \
--mount type=bind,source=/node/src,target=/node/src \
--mount type=bind,source=/node/dist-avito,target=/node/dist-avito \
--secret source=avito-heat.env,target=/node/.env \
10.16.0.2:5000/avito

#### Расширить сервис
docker service scale avito-heat=3


docker service logs avito-heat
docker service logs --follow avito-heat

логи :
sudo journalctl -fu docker.service

docker service logs --task my-service.1.abcd1234

docker volume prune

docker ps

docker service rm avito-heat
docker service rm avito
docker image rm 10.16.0.2:5000/avito

docker exec -it 69bda0086780 /bin/bash

cat src/avito-walk/main-walk-list.ts
node --loader @bleed-believer/path-alias src/avito-walk/main-walk-list.ts

docker container exec $(docker ps --filter name=avito.1.xkgllyagfjrqncifbbkv5yebh -q) ls -l /run/secrets



## Формирование необходимых переменных
запусти

ansible-playbook -i inventory --vault-password-file ~/gayrat/.pass  roles/swarm_init/tests/test.yml