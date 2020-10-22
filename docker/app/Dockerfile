FROM node:lts-alpine

# install vue/cli
RUN npm install -g @vue/cli

# set /app as workdir
WORKDIR /app

# copy 'package.json' and 'package-lock.json'
COPY package*.json ./

# install dependencies
RUN npm install

# copy files and folder to workdir ('app')
COPY . .

EXPOSE 8080
