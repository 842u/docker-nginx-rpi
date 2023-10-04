FROM node:20-alpine AS base

FROM base AS dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY ./ ./
RUN npm run build

FROM base AS run
WORKDIR /app
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static

ENV NODE_ENV=production

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

LABEL org.opencontainers.image.source=https://github.com/842u/docker-nginx-rpi
LABEL org.opencontainers.image.description="Production environment image"
LABEL org.opencontainers.image.licenses=MIT

CMD ["node", "server.js"]
