# Étape de construction
FROM node:20-alpine as build
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY . .

# Construction de l'application
RUN npm run build

# Étape de production
FROM nginx:alpine

# Copie des fichiers construits depuis l'étape de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copie la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port 80
EXPOSE 80

# Démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
