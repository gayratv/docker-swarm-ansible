FROM node:18-alpine as build
WORKDIR /opt/app
ADD *.json ./
RUN npm install
ADD . .
VOLUME ["/opt/app/data"]
RUN /opt/app/node_modules/.bin/tsc
CMD ["node", "./build/index.js"]