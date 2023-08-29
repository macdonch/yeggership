# pull official base image
FROM node:18
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

CMD [ "npm", "run", "deploy" ]

EXPOSE 80