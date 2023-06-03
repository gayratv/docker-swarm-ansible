adduser docker
95qytONO
95qytONOroot

usermod -aG sudo docker

visudo
>> %sudo   ALL=(ALL:ALL) ALL
docker   ALL=(ALL) NOPASSWD:ALL


su - docker

ssh-copy-id -i id_rsa.priv docker@ovz7.j4547248.pv29m.vps.myjino.ru

                                           ovz7.j4547248.pv29m.vps.myjino.ru
ssh-copy-id -i id_rsa.priv -p 49357 docker@ovz7.j4547248.pv29m.vps.myjino.ru
ssh-copy-id -i ~/.ssh/ansible/id_rsa.priv -p 49357 root@ovz7.j4547248.pv29m.vps.myjino.ru
95qytONO

Сделай проброс порта 22
22 -> 49357

Now try logging into the machine, with
ssh -p '49357' 'docker@ovz7.j4547248.pv29m.vps.myjino.ru'

ssh -p '49357' 'root@ovz7.j4547248.pv29m.vps.myjino.ru'

sudo passwd --delete docker

sudo userdel -r docker

************************************************

jin2
22	49360
95qytONOroot
ovz8.j4547248.pv29m.vps.myjino.ru
ssh -p 49360 root@ovz8.j4547248.pv29m.vps.myjino.ru

apt update
apt install nano

nano /etc/ssh/sshd_config
сделай
PubkeyAuthentication yes


sudo systemctl restart ssh
sudo service ssh restart

ssh-copy-id -i ~/.ssh/ansible/id_rsa.priv -p 49360 root@ovz8.j4547248.pv29m.vps.myjino.ru

ssh -p 49360 -i ~/.ssh/ansible/id_rsa.priv 'root@ovz8.j4547248.pv29m.vps.myjino.ru'

/****************
добавь пользователя

adduser docker
95qytONO

usermod -aG sudo docker

visudo
>> %sudo   ALL=(ALL:ALL) ALL

ssh-copy-id -i ~/.ssh/ansible/id_rsa.priv -p 49360 docker@ovz8.j4547248.pv29m.vps.myjino.ru

ssh -p '49360' -i ~/.ssh/ansible/id_rsa.priv 'docker@ovz8.j4547248.pv29m.vps.myjino.ru'

/************************************************
jin3
/************************************************
22	49363
ovz9.j4547248.pv29m.vps.myjino.ru
ssh -p 49363 root@ovz9.j4547248.pv29m.vps.myjino.ru


apt update
apt install nano -y

nano /etc/ssh/sshd_config
сделай
PubkeyAuthentication yes
ssh-copy-id -i ~/.ssh/ansible/id_rsa.priv -p 49363 root@ovz9.j4547248.pv29m.vps.myjino.ru

ssh -p 49363 -i ~/.ssh/ansible/id_rsa.priv root@ovz9.j4547248.pv29m.vps.myjino.ru
ssh -p 49363 -i ~/.ssh/ansible/id_rsa.priv docker@ovz9.j4547248.pv29m.vps.myjino.ru