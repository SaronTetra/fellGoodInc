# Test
FROM node:18.8-alpine as test-target
ENV NODE_ENV=development
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/src/app

COPY package*.json ./

# CI and release builds should use npm ci to fully respect the lockfile.
# Local development may use npm install for opportunistic package updates.
ARG npm_install_command=ci
RUN npm $npm_install_command

COPY . .
CMD ["npm", "run", "dev"]
