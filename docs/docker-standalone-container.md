Запустить контейнер для общих целей

docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

// docker run --name node18 -m 256M -dit -w /node -v /node:/node node:18 npm ci

// Запустить спящий контейнер
docker run --name node18 -m 256M -d -w /node -v /node:/node node:18 sleep infinity
// установить зависимости
docker exec node18  npm ci

## интерактивный запуск
docker exec -it node18  /bin/bash

docker exec -t node18  /node/node_modules/.bin/ts-node src/avito-walk/database/prepare_heat_jobs.ts


## Ручные команды
// добавить путь - каждый раз
export PATH=/node/node_modules/.bin:$PATH

/node/node_modules/.bin/ts-node src/avito-walk/database/prepare_heat_jobs.ts

docker exec -it cab8a90a4d00  /bin/bash



docker rm 9f58279253d251441152607f3a98ce1554bdeea79e2d69da85efa020f6abb571

docker container prune

### Временная зона
timedatectl list-timezones | grep Moscow
timedatectl list-timezones | grep London
timedatectl list-timezones | grep Iceland

sudo timedatectl set-timezone Europe/Moscow
sudo timedatectl set-timezone Europe/London
sudo timedatectl set-timezone Iceland

Показ времени с учетом зоны
timedatectl

## Полезное

crontab -e

sudo truncate -s 0 /var/log/syslog
sudo tail -f /var/log/syslog

sudo grep CRON /var/log/syslog



echo "$(date +'%Y-%m-%d %H:%M')"


truncate -s 0 /home/docker/cron-test.txt
sudo crontab -e
cat /home/docker/cron-test.txt

echo "every minute $(date +'%Y-%m-%d %H:%M:%S')"

* * * * * /home/docker/e.sh
33 10 * * * /home/docker/e1.sh
34 10 * * * /home/docker/e1.sh
35 10 * * * /home/docker/e1.sh
36 10 * * * /home/docker/e1.sh
37 10 * * * /home/docker/e1.sh
38 10 * * * /home/docker/e1.sh

#!/bin/bash
echo "$(date +'%Y-%m-%d %H:%M')" >> /home/docker/cron-test.txt

## Опции
--detach , -d		Run container in background and print container ID

--env-file

--interactive , -i		Keep STDIN open even if not attached

--memory , -m		Memory limit

--rm		Automatically remove the container when it exits

--tty , -t		Allocate a pseudo-TTY

--volume , -v		Bind mount a volume

--workdir , -w		Working directory inside the container

### Очистить volume
docker run --itd -v cache_vol:/data-cache alpine sh -c 'rm -rf /data/*'
docker run -it -v cache_vol:/data-cache alpine sh

размера volume
sudo du -sh /var/lib/docker/volumes/cache_vol/_data

du -h - размер текущей директории
df -h

docker ps -qf "ancestor=node:18"  | head -n 1
docker exec -it 1f5f626837d8 /bin/bash

docker exec -it $(docker ps -qf "ancestor=node:18" | head -n 1) /bin/bash
docker exec -it $(docker ps -qf "ancestor=10.16.0.2:5000/avito-heat:latest" | head -n 1) /bin/bash
docker exec -it $(docker ps -qf "ancestor=10.16.0.2:5000/avito-heat-prepare:latest" | head -n 1) /bin/bash

docker service logs --follow avito-heat-prepare 


/// В контейнер Node 18 подготовить sh файл:
aprep

#!/bin/bash
cd /node && /usr/bin/node  /node/dist-node18/prepare_heat_jobs.mjs

chmod +x prepare_heat_jobs.sh
./prepare_heat_jobs.sh

// на node 


******* prepare_heat_jobs.sh *********
#!/bin/bash
docker exec -it $(docker ps -qf "ancestor=10.16.0.2:5000/avito-heat-prepare:latest" | head -n 1) /node/dist-node18/prepare_heat_jobs.sh &>> prepare-heat.log
******* prepare_heat_jobs.sh *********

docker exec -it $(docker ps -qf "ancestor=10.16.0.2:5000/avito-heat-prepare:latest" | head -n 1) /bin/bash

chmod +x /node/dist-node18/prepare_heat_jobs.sh

35 18 * * * /bin/bash /home/docker/prepare_heat_jobs.sh &>> cron.log
04 3 * * * /home/docker/prepare_heat_jobs.sh

0 16 * * * /home/docker/prepare_heat_jobs.sh
0 12 * * * /home/docker/prepare_heat_jobs.sh
0 7 * * * /home/docker/prepare_heat_jobs.sh

15-18

truncate -s 0 prepare-heat.log
cat cron.log && echo "prepare-heat.log" && cat prepare-heat.log

sudo truncate -s 0 /var/log/syslog
sudo tail -f /var/log/syslog

sudo grep CRON /var/log/syslog


***** Рабочая версия  ********************************************
0 16 * * * /home/docker/prepare_heat_jobs.sh
0 12 * * * /home/docker/prepare_heat_jobs.sh
0 7 * * * /home/docker/prepare_heat_jobs.sh

*************************************************
