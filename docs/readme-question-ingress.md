Как правильно создать ingress сеть на 1000 узлов ?
Или надо ставить nginx или  traefic и за ним ставить overlay сети по 256 узлов каждая?

Вот тут в документации описывается ограничение на создание ovewrlay сетей для swarm, сказано что не надо создавать сети более чем на 256 IP

https://docs.docker.com/engine/swarm/networking/

Overlay network size limitations
Docker recommends creating overlay networks with /24 blocks. The /24 overlay network blocks limit the network to 256 IP addresses.

This recommendation addresses limitations with swarm mode. If you need more than 256 IP addresses, do not increase the IP block size. You can either use dnsrr endpoint mode with an external load balancer, or use multiple smaller overlay networks. See Configure service discovery for more information about different endpoint modes

```
webx:
    restart: on-failure
    build: ./web
    hostname: webx
    deploy:
        replicas: 2
        endpoint_mode: dnsrr
```

Чуть ниже в документации Docker создает сеть на 65534 узлов

https://docs.docker.com/engine/swarm/networking/#customize-the-ingress-network

Create a new overlay network using the --ingress flag, along with the custom options you want to set. This example sets the MTU to 1200, sets the subnet to 10.11.0.0/16, and sets the gateway to 10.11.0.2.


### Деплой на Docker Swarm
https://sidmid.ru/%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D0%BD%D0%B0-docker-swarm/

endpoint_mode
Используемый метод обнаружения (“service discovery”) для внешних запросов от клиентов.

endpoint_mode: **vip** - Докер присваивает сервису виртуальный IP адрес (VIP), который выступает в роли “внешнего” для получения доступа к сервису. Докер сам занимается маршрутизацией запросов между клиентом и доступным воркером (на котором крутится сервис), при этом клиент ничего не знает ни о количестве нод, ни о их IP и портах (используется по умолчанию).

endpoint_mode: **dnsrr** - DNS “round-robin” (DNSRR) не использует одиночный виртуальный IP адрес. Докер устанавливает DNS записи для сервиса таким образом, что когда клиент его запрашивает - ему возвращается список из IP адресов, и клиент сам подключается к одному из них. DNS “round-robin” полезен в случаях использования своего собственного балансировщика нагрузки, или для гибридных Windows & Linux приложений.

resources

В приведенном ниже примере сервис redis может использовать не более 50 Мб памяти и 0.50 (50%) доступного процессорного времени (CPU), а так же имеет зарезервированные 20 Мб памяти и 0.25CPU (всегда доступные для него).

```dockerfile
version: '3'
 
services:
  redis:
    image: redis:alpine
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 50M
        reservations:
          cpus: '0.25'
          memory: 20M
```

## 4.docker swarm - запуск сервисов(traefik)
https://sidmid.ru/4-docker-swarm-%d0%b7%d0%b0%d0%bf%d1%83%d1%81%d0%ba-%d1%81%d0%b5%d1%80%d0%b2%d0%b8%d1%81%d0%be%d0%b2/


Сергей Седов 38 минут назад
Linux/DevOps/Ansible
от 1 500 руб.
за час
Добрый день
На одном проекте, где много контейнеров и они часто пересоздаются я использую 2 сети с маской /16 каждая. Сети разделил по назначению контейнеров (фронт и бек). На входе трафика стоит Traefik который подключен в обе сети одновременно. Проблемы маршрутизации трафика нет, сети маршрутизируются автоматически на всех узлах кластера (мастер + 2 воркера).
С сетью /24 у меня было переполнение адресации. Тут еще нужно учитывать момент, который не сильно где описан, что при пересоздании контейнера docker не сразу освобождает сетевой адрес, то есть какое-то время он считает что старый адрес контейнера еще используется и, соответственно, новый уже используется. И в случае когда с контейнерами есть проблема и они настроены на перезапуск, то очень быстро у меня кончалась сеть /24. С сетью /16 проблем пока не было.
В кластере запущено сейчас 137 стеков в каждом по 2 контейнера и будет расти примерно в 2 раза еще.
Если этой консультации достаточно, то оплаты не нужно, можно ограничиться отзывом. Если нужны примеры, конфиги или более детальный ответ, то пишите в телегу.
ТГ: @ssedov

Сергей Седов
Linux/DevOps/Ansible
41 год
Исполнитель
Статистика фрилансера
Зарегистрирован 12 месяцев назад
Был последний раз сегодня
Верификация
Пользователь верифицирован по номеру телефона
Контакты фрилансера
Почта: ssedov@yandex.ru
Телефон: 89272793758
Telegram: ssedov