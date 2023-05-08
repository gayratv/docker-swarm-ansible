FROM node:18-alpine
WORKDIR /node/
ADD ./build/index.js  ./*.json ./
RUN apk update  \
RUN apk add curl host && npm ci --production
USER node
# приложение слушает порт 3000
EXPOSE 3020
CMD ["node", "index.js"]