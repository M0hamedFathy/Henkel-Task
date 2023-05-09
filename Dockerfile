# 1. Build Stage
FROM node:lts AS build

WORKDIR /angular-workspace
COPY package*.json .

RUN npm ci
COPY . .

RUN ./node_modules/.bin/ng build


# 2. Run stage
FROM nginx:stable

WORKDIR /angular-workspace
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /angular-workspace/dist/test-app-frontend /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]