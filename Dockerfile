FROM quay.io/shahzarkhan/shahzar-bot:latest

WORKDIR /root/shahzar-md

RUN git clone https://github.com/shahzarmd/Shahzarmd . && \
    npm install

EXPOSE 5000

CMD ["npm", "start"]
