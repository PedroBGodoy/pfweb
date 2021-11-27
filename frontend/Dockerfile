# --------------> The base image
FROM node:16-alpine3.14 AS build
WORKDIR /usr/src/app
COPY [ ".", "/usr/src/app" ]
RUN npm i

# --------------> The production image
FROM node:16-alpine3.14
WORKDIR /usr/src/app
COPY --chown=node:node --from=build [ "/usr/src/app/node_modules", "/usr/src/app/node_modules" ]
COPY --chown=node:node [ ".", "/usr/src/app" ]
USER node
CMD [ "npm", "run", "dev" ]
