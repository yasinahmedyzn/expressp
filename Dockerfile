FROM node:16


COPY . .
RUN npm init -y
RUN npm install
RUN npm start

EXPOSE 8002
CMD ["npm","start"]
