FROM node:17.6.0

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./


CMD ["npm", "start"]