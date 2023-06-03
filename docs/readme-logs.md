you can get the size of the logs via
sudo sh -c "du -ch /var/lib/docker/containers/*/*-json.log"

$(docker inspect --format='{{.LogPath}}' <container_name_or_id>)

показывает часть строки вывода
docker inspect --format='{{.Spec.Name}}' proxy-manager

truncate -s 0 $(docker inspect --format='{{.LogPath}}' <container_name_or_id>)

Как daemon.json
https://stackoverflow.com/questions/42510002/docker-how-to-clear-the-logs-properly-for-a-docker-container

TIPS Logs
https://sudo-bmitch.github.io/presentations/dc2019/tips-and-tricks-of-the-captains.html#11

# Рабочее запускать на каждой ноде
To get the size of the logs
sudo sh -c "du -ch /var/lib/docker/containers/*/*-json.log"
truncate
sudo sh -c "truncate -s 0 /var/lib/docker/containers/**/*-json.log"



--log-opt max-size=10m --log-opt max-file=3
"log-driver": "json-file",
logging:
    options:
        max-size: "10m"
        max-file: "3"

https://docs.docker.com/config/containers/logging/json-file/
{
"log-driver": "json-file",
"log-opts": {
"max-size": "10m",
"max-file": "3"
}
}


Example file in /etc/logrotate.d/docker-logs

/var/lib/docker/containers/*/*.log {
rotate 7
daily
compress
size=50M
missingok
delaycompress
copytruncate
}