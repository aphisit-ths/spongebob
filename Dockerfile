# Build Stage
FROM node:16-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build