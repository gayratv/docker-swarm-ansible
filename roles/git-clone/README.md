git-clone
=========

Клонирует репозитарий в директорию
 

Role Variables
--------------

    эта переменная есть в глобальных переменных - не указывать
      // git_repository_base_dir: "/git-repos2/"
      git_repository_url: "https://github.com/gayratv/docker-swarm-ansible"
      git_repository_name: "ip-show"
      git_repository_destination_dir: "{{ git_repository_base_dir }}{{ git_repository_name  }}"
      git_repository_branch: Docker_demo_3_IP


Ссылка на репозитарий
Директория назначения
Можно задать branch

ansible-playbook -i inventory roles/git-clone/tests/test.yml
