# Étape de construction
FROM node:20-alpine AS builder
WORKDIR /app

# Installation des dépendances système
RUN apk add --no-cache git

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances (y compris devDependencies)
RUN npm install

# Copie du code source
COPY . .

# Suppression des références aux images manquantes
RUN sed -i '/import.*\.\.\/assets\//d' src/components/Header.jsx && \
    sed -i 's/src={\?[^}]*}/src="#"/g' src/components/Header.jsx

# Construction de l'application
RUN npm run build

# Étape de production
FROM nginx:alpine

# Installation de curl pour les healthchecks
RUN apk --no-cache add curl

# Copie des fichiers construits
COPY --from=builder /app/dist /usr/share/nginx/html

# Copie la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

# Exposition du port 80
EXPOSE 80

# Démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
