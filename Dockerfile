from node:latest

COPY . /placecz

WORKDIR /placecz

RUN npm install

CMD ["node", "headlessBot.js", "autologin"]
