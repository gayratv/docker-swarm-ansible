FROM node:18-alpine
RUN apk add curl
WORKDIR /node/
ADD ./build/index.js  ./package.json ./
USER node
# приложение слушает порт 3000
EXPOSE 3000
CMD ["node", "index.js"]