FROM node:20-alpine AS base

FROM base AS dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS run
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY ./ ./
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
ENV WATCHPACK_POLLING=true

LABEL org.opencontainers.image.source=https://github.com/842u/docker-nginx-rpi
LABEL org.opencontainers.image.description="Development environment image"
LABEL org.opencontainers.image.licenses=MIT

EXPOSE 3000

CMD ["npm", "run", "dev"]
