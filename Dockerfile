# syntax=docker/dockerfile:1

# --- Stage 1: build the static web bundle ---
FROM node:20-alpine AS build
WORKDIR /app

# The web build only needs Vite/React — skip the large Electron binary download
ENV ELECTRON_SKIP_BINARY_DOWNLOAD=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build:web

# --- Stage 2: serve the static bundle with nginx ---
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/renderer /usr/share/nginx/html
EXPOSE 80
