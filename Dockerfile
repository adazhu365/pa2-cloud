FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node pa2-node.js
EXPOSE 36989
