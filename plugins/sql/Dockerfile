FROM fusuf/whatsasena:latest

RUN git clone https://github.com/NICO-AWM/-AWM- /root/CyberQueen
WORKDIR /root/CyberQueen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "CyberQueen.js"]
