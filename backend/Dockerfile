# --------------> The base image
FROM node:16-alpine3.14 AS build
WORKDIR /usr/src/app
COPY [ ".", "/usr/src/app" ]
RUN npm i
RUN npm run build

# --------------> The production image
FROM node:16-alpine3.14
RUN apk add --no-cache dumb-init=1.2.5-r1 && \
    arch && sleep 10 && uname -ra && sleep 10
WORKDIR /usr/src/app
COPY --chown=node:node --from=build [ "/usr/src/app/node_modules", "/usr/src/app/node_modules" ]
COPY --chown=node:node --from=build [ "/usr/src/app/dist", "/usr/src/app/" ]
USER node
CMD [ "dumb-init", "node", "./src/main.js" ]
