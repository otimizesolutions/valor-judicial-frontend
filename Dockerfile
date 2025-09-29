FROM node:lts-alpine AS builder


WORKDIR /app

COPY package.json package-lock.json ./ 
COPY . .

RUN npm ci

RUN npm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/.env.local ./

RUN npm ci --production

EXPOSE 3000

CMD ["npm", "start"]