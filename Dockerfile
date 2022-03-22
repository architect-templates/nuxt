FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG DEBUG
RUN if [ "$DEBUG" != "true" ]; then npm run build; fi

CMD [ "npm", "start" ]
