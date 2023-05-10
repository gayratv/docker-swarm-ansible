The group_vars directory contains files that define variables for groups of hosts. The filename should match the name of the group, and the file extension should be .yml or .yaml. For example, if you have a group named **webservers**, you can define variables for this group in a file named webservers.yml or webservers.yaml

The **host_vars** directory contains files that define variables for individual hosts. The filename should match the name of the host, and the file extension should be .yml or .yaml. For example, if you have a host named web01, you can define variables for this host in a file named web01.yml or web01.yaml.

These global variable directories are searched by Ansible automatically, so you don't need to specify them explicitly in your playbooks. However, you can override the default directories by specifying the ansible_playbook_python environment variable or using the --vault-id command line option.

Переместил vars из корня в директорию all - что означает что эти переменные для всеъ хостов
Благодаря этому стал доступен vault из vars