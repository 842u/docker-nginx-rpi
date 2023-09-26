FROM node:20-alpine AS base

FROM base AS dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS run
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV PORT=3000
ENV HOSTNAME=localhost
EXPOSE 3000
CMD ["npm", "run", "dev"]
