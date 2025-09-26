FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./ 
COPY . .

RUN npm ci

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

RUN npm ci --production

EXPOSE 3000

CMD ["npm", "start"]