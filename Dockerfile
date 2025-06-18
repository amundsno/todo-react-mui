FROM node:24-alpine AS build
WORKDIR /src
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS release
COPY --from=build /src/dist /usr/share/nginx/html
EXPOSE 80