FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

CMD [ "npm", "start" ]
