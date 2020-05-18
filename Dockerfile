FROM node:10.16.2 as builder

WORKDIR /var/www

COPY . .

RUN npm install;

RUN npm run build

FROM node:10.16.2 as runtime

WORKDIR /var/www

COPY --from=builder /var/www/. .

RUN npm run build

CMD ["npm", "start"]