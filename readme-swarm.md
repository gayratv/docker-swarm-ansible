
### Обзор inventory
ansible-inventory -i inventory --list -y

### Verifying the inventory
https://docs.ansible.com/ansible/latest/network/getting_started/first_inventory.html#verifying-the-inventory

ansible-inventory -i inventory --list


-# manager - группа хостов
ansible -i inventory manager -m ping

// Any command that you would normally execute on a remote server over SSH can be run with Ansible on the servers specified in your inventory file. As an example, you can check disk usage on all servers with:

ansible -i inventory manager -a "df -h" -u root

// You can also execute Ansible modules via ad-hoc commands, similarly to what we’ve done before with the ping module for testing connection. For example, here’s how we can use the apt module to install the latest version of vim on all the servers in your inventory:

ansible -i inventory manager -m apt -a "name=vim state=latest"

// you would check the uptime of every host in the servers group:

ansible -i inventory manager -a "uptime" 

### --list-hosts          outputs a list of matching hosts; does not execute anything else

ansible-playbook -i inventory ping-role.yml --list-hosts

### swarm init
export ANSIBLE_CONFIG=~/ansible/ansible.cfg && ansible-playbook -i inventory roles/swarm_init/tests/test.yml
ansible-playbook --flush-cache -i inventory roles/swarm_init/tests/test.yml

To clear the cache in Ansible, you can use the 
--flush-cache clear the fact cache for every host in inventory
option with the ansible-playbook command1.


### swarm join
ansible-playbook -i inventory roles/swarm_join/tests/test.yml

ansible-playbook -i inventory roles/swarm_join_worker/tests/test.yml

ansible-playbook -i inventory swarm_join_test.yml




export ANSIBLE_CONFIG=~/ansible/ansible.cfg && ansible-playbook -i inventory swarm-init-show-token.yml

ansible-playbook -i inventory ping.yml --limit ans3


docker swarm join --token SWMTKN-1-1adae3x6sxaafxckc2p3eh3jtpvdgxzhm03ysofhf2e81fqnvy-43voeu9jlxpbdjff2s7o92sdr 10.16.0.2






