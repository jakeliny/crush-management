FROM node:latest

LABEL mantainer="Icarcal @icarcal"
LABEL version="1.0"

WORKDIR /var/www/app

COPY . ./

EXPOSE 3000

CMD [ "./build-node.sh" ]
