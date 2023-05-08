FROM node:18-alpine
#FROM node:latest
WORKDIR /node/
ADD ./build/index.js .env ./*.json ./

#RUN apt-get update && npm ci --omit=dev
#RUN #apt-get update && apt-get upgrade -y && npm ci --omit=dev

#RUN apk update
#RUN apk add curl bash && npm ci --production
RUN npm ci --production
USER node
# приложение слушает порт 3020
#EXPOSE 3020
#CMD ["node", "index.js"]
#CMD ["sh"]
CMD ["sleep", "infinity"]