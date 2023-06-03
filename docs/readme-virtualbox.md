при запуске Virtualbox есть проблема соединения с сетью из под wsl

решается так:

https://github.com/microsoft/WSL/issues/7971#issuecomment-1426913348

export WSL_HOST=$(cat /etc/resolv.conf | awk '/nameserver/ {print $2}')

ssh user@$WSL_HOST -p 5022