такая команда работает

git clone git@github.com:gayratv/playwright-docker2

https://github.com/gayratv/playwright-docker2

export GIT_SSH_COMMAND="ssh -i /path/to/private/key"

Подготовка для чтения приватного репозитория


// Скопировать приватный ключ на ans1

scp ~/.ssh/github/id_rsa ans1:/node/src

ls /node/src/id_rsa
mv /node/src/id_rsa


nano config

host *
  StrictHostKeyChecking no

host github.com
  IdentityFile ~/.ssh/id_rsa


ls -l /home/docker/.ssh/id_rsa
// только чтение
chmod 400 /home/docker/.ssh/id_rsa
sudo chown docker:docker /home/docker/.ssh/id_rsa

Проверь что ключ читается
cat /home/docker/.ssh/id_rsa
