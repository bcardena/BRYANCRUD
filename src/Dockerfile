FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node /app/index.js
EXPOSE 4000