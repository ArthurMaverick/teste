FROM node:16.8

ENV APP=/usr/src/app

WORKDIR $APP

COPY package*.json ./ 

RUN  npm i\
  npm run build

COPY . .

CMD ["npm", "start"]

EXPOSE 8000