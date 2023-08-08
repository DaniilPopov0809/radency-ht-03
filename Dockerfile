FROM node:18

WORKDIR /src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "/src/app/dist/server.js"]