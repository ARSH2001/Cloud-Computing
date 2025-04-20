FROM node:latest
WORKDIR /Home/HW01/Q01

COPY package.json .

COPY package-lock.json .

COPY . .

RUN npm install

EXPOSE 3000 

COPY server.js .

CMD ["npm","start"]

