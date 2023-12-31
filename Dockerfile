
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=3002

EXPOSE 3002

CMD [ "npm", "run", "dev" ]

