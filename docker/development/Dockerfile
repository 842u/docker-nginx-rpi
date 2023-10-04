FROM node:20-alpine AS base

FROM base AS dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS run
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY ./ ./

ENV NODE_ENV=development

ENV NEXT_TELEMETRY_DISABLED=1
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

LABEL org.opencontainers.image.source=https://github.com/842u/docker-nginx-rpi
LABEL org.opencontainers.image.description="Development environment image"
LABEL org.opencontainers.image.licenses=MIT

CMD ["npm", "run", "dev"]
