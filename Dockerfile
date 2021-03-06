FROM resin/rpi-raspbian:stretch
#FROM debian:stretch
MAINTAINER yamaryoxxxx@gmail.com

# initialization
RUN apt-get update

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN echo deb http://deb.nodesource.com/node_8.x stretch main >> /etc/apt/sources.list
RUN echo deb-src http://deb.nodesource.com/node_8.x stretch main >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y --allow-unauthenticated nodejs

# copy and build scripts
RUN apt-get install -y alsa-utils
COPY . /app
WORKDIR /app
RUN npm install

# execute app
CMD node app.js
