FROM node:16.8-slim

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN  npm install 

COPY . .

CMD ["npm", "start"]

EXPOSE 8000