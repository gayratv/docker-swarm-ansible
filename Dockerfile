FROM node:18-alpine
WORKDIR /node/
ADD ./build/index.js  ./package.json ./
RUN apk add curl dnsutils && npm ci
USER node
# приложение слушает порт 3000
EXPOSE 3020
CMD ["node", "index.js"]