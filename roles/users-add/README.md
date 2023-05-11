Создает нового пользователя
имя пользователя задается в переменных в директории defaults
также устанавливается публичный ключ ansible для docker

ansible-playbook -i inventory roles/users-add/tests/test.yml --ask-pass

q6L?573Jfv8L


sudo groupadd docker
sudo useradd -m -g docker docker
sudo usermod -aG sudo docker

sudo adduser username groupname


sudo usermod -a -G group_name username
sudo usermod -a -G docker docker
sudo usermod -a -G sudo docker

su - docker
mkdir ~/.ssh \
chmod 700 ~/.ssh \
touch ~/.ssh/authorized_keys \
chmod 600 ~/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDeZS159rG4xShGn4JGpFsPOzgarFAMxojtUXH2e7NlFxI2ZL8twaW+lzjH61Q4510cEvL0gFUZgeuoFILf4qu3HBpRSRwa0wA8GGvXD9Y3B2xDUtZbczOKMCzlrwIyTsGyD+Zlkt5/jbRx8IOsdz6fOlVm1OLZ5j+skdsLqBltdOux0RbMdH0K1dFEk3piHWROniQqyOrMoYg/7cwPTPNmD7lYPMvRaKRilu+g3HxCo9FRWNkKgiOJNMXBAyL5oy3lPtqsmhwDwpM2k3Qe5Lq6iEjIJPARoLgmJuSr1GQdFWopXnf1CUhifVBbR20HF2K0v/DNVuQGx/z7FWpiNQl11t8QkxJkU0rNiEZFbVc90/HuRi6TzPHtW8hnjYdqOLNSHZjk1LslkKseViOU6KJsXofakOUXHik++sYB0k8PfXk2pSvwZX65+iUUNsH6GDx7hy4m6W6SYFnvHOy47P0istWETN0RKTuWn8AbPYqDtnsKr8v9nAEpod95LwL/R38= root@w11" >> ~/.ssh/authorized_keys

sudo visudo
:nano /etc/sudoers
docker ALL=(ALL:ALL) NOPASSWD:ALL


ssh -p 49198 root@ovz1.j4547248.gmzem.vps.myjino.ru

/etc/sudoers
cat /etc/sudoers.d
cat /etc/sudoers.d/README
