#! /bin/bash
git pull && \
docker kill meditation-bell && \
docker rm meditation-bell && \
docker build -t yamaryoxxxx/raspi-meditation-bell . && \
docker push yamaryoxxxx/raspi-meditation-bell && \
docker run -d --restart=always --device /dev/snd:/dev/snd --name meditation-bell yamaryoxxxx/raspi-meditation-bell
