from node:17-alpine

COPY . /placecz

WORKDIR /placecz

RUN npm install

CMD ["node", "headlessBot.js", "autologin"]
