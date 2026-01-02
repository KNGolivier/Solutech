# Étape de construction
FROM node:20-alpine AS builder
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
COPY vite.config.js ./

# Installation des dépendances (y compris les devDependencies nécessaires pour le build)
RUN apk add --no-cache imagemagick && \
    npm ci

# Copie du code source
COPY . .

# Création des fichiers manquants si nécessaire
RUN mkdir -p src/assets && \
    if [ ! -f "src/assets/hero.jpg" ]; then \
        echo "Création d'un fichier factice pour hero.jpg"; \
        convert -size 1x1 xc:white -quality 1 src/assets/hero.jpg; \
        convert -size 1x1 xc:white -quality 1 src/assets/LOGO.png; \
    fi

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
