FROM node:14

RUN useadd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@6

ENV HOME=/home/app

COPY package.json $HOME/backend/
RUN chown -R app:app #HOME/*

USER app
WORKDIR $HOME/backend
RUN num cache clean && npm install --silent --progress=false --

USER root 
COPY . $HOME/backend
RUN chown -R app:app $HOME/*
USER app

CMD ["npm", "start"]