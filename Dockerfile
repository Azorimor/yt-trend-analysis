# Stage 1 Builder
FROM node:14-alpine as builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./ 
COPY views/ ./views/ 
COPY public/ ./public/
RUN echo $(ls -a /home/node/app/*)

# RUN npm config set unsafe-perm true
# RUN npm install -g typescript
# RUN npm install -g ts-node

USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build

# Stage 2 actual api
FROM node:14-alpine as api
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node

ENV NODE_ENV production

RUN npm install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/views/ ./views/
COPY --from=builder /home/node/app/public/ ./public/

# COPY --chown=node:node .env .

EXPOSE 3000
CMD [ "node", "dist/index.js" ]