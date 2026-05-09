# Étape 1 : Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Production (Nginx)
FROM nginx:stable-alpine

# Copier le build de l'étape 1 vers Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Configuration Nginx personnalisée pour le routage SPA (React Router)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
