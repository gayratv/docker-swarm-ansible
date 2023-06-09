# Запуск CRON 

Сам CRON заупскается на хосте ans1

Была ошибка с параметром -it в docker exec

### Скрипты приведены в директории ans1 
chmod +x /node/dist-node18/prepare_heat_jobs.sh


### Временная зона
Временную зону решил не трогать и установить в UTC 0 - это Iceland

timedatectl list-timezones | grep Moscow
timedatectl list-timezones | grep London
timedatectl list-timezones | grep Iceland

sudo timedatectl set-timezone Europe/Moscow
sudo timedatectl set-timezone Europe/London
sudo timedatectl set-timezone Iceland

Показ времени с учетом зоны

timedatectl
date

Показ даты:
echo "$(date +'%Y-%m-%d %H:%M:%S')"

### Установить запуск задач

crontab -e

0 16 * * * /home/docker/prepare_heat_jobs.sh
0 12 * * * /home/docker/prepare_heat_jobs.sh
0 7 * * * /home/docker/prepare_heat_jobs.sh

### Работа с системным журналом

sudo truncate -s 0 /var/log/syslog
sudo tail -f /var/log/syslog
sudo grep CRON /var/log/syslog

