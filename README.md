# docker-raspi-meditation-bell
Ring bell at fixed time every day

```sh
docker build -t raspi-meditation-bell .
docker run -d --device /dev/snd:/dev/snd --restart=always raspi-meditation-bell
```
