#! /bin/bash
git pull
docker kill meditation-bell
docker rm meditation-bell
docker build -t raspi-meditation-bell .
docker run -d --restart=always --device /dev/snd:/dev/snd --name meditation-bell raspi-meditation-bell
