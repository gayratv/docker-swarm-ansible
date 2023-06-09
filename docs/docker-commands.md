### Очистить volume
docker run --itd -v cache_vol:/data-cache alpine sh -c 'rm -rf /data/*'
docker run -it -v cache_vol:/data-cache alpine sh

### Найти меторасположение volume
docker volume inspect cache_vol

размер volume
sudo du -sh /var/lib/docker/volumes/cache_vol/_data

du -h - размер текущей директории
df -h

### Посмотреть логи сервиса
docker service logs --follow avito-heat-prepare
