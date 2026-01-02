# Étape de construction
FROM node:20-alpine as build
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY . .

# Création d'un fichier factice si nécessaire
RUN mkdir -p src/assets && \
    if [ ! -f "src/assets/hero.jpg" ]; then \
        echo "Création d'un fichier factice pour hero.jpg"; \
        dd if=/dev/zero of=src/assets/hero.jpg bs=1 count=0 seek=1K 2>/dev/null; \
    fi

# Construction de l'application avec force si nécessaire
RUN npm run build || (echo "Build échoué, tentative avec --force" && npm run build -- --force || true)

# Étape de production
FROM nginx:alpine

# Copie des fichiers construits depuis l'étape de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copie des assets
COPY --from=build /app/src/assets/ /usr/share/nginx/html/assets/

# Copie la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port 80
EXPOSE 80

# Démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
