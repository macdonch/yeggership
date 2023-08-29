# pull official base image
FROM node:18 as build
ENV GENERATE_SOURCEMAP=false
ENV PUBLIC_URL=/

# install app dependencies
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

COPY . /usr/src/app

RUN npm run build

RUN ls -al

FROM nginx:mainline-alpine-slim
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html