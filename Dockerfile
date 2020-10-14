FROM node:8.16.2-alpine as builder

# Set a working directory
WORKDIR /workspace

RUN npm install -- save-dev @babel/node
RUN npm install -- save-dev @babel/preset-env
RUN npm install -- save-dev @babel/preset-react

RUN yarn install --production --no-progress
RUN yarn run build --release


FROM node:8.16.2-alpine
# Set a working directory
WORKDIR /usr/src/app

COPY ./build/package.json .
COPY ./build/yarn.lock .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Copy application files
COPY ./build .

# Set permissions for "node" user
RUN chown -R node:node /usr/src/app
RUN chmod 755 /usr/src/app

# Run the container under "node" user by default
USER node

# Set NODE_ENV env variable to "production" for faster expressjs
ENV NODE_ENV production

CMD [ "node", "server.js" ]
