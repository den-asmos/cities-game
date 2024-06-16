FROM node:18-alpine

WORKDIR /src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 7070

CMD ["npm", "run", "preview"]