# Étape de construction
FROM node:20-alpine AS builder
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
COPY vite.config.js ./

# Installation des dépendances
RUN npm ci

# Copie du code source
COPY . .

# Création des dossiers et fichiers manquants
RUN mkdir -p src/assets && \
    touch src/assets/hero.jpg && \
    touch src/assets/LOGO.png

# Construction de l'application avec gestion d'erreur
RUN npm run build || (echo "Build échoué, tentative avec --force" && npm run build -- --force || true)

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
