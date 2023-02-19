FROM gplane/pnpm:7.25.1-node18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /home/node/app
COPY pnpm-lock.yaml .npmr[c] ./

RUN pnpm fetch

FROM gplane/pnpm:7.25.1-node18-alpine AS builder
WORKDIR /home/node/app
COPY --from=deps /home/node/app/node_modules ./node_modules
COPY . .

RUN pnpm install -r --offline

RUN pnpm build

FROM gplane/pnpm:7.25.1-node18-alpine AS runner
WORKDIR /home/node/app

ENV NODE_ENV production

COPY --from=builder /home/node/app/next.config.js ./
COPY --from=builder /home/node/app/src/public ./public
COPY --from=builder /home/node/app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# Some things are not allowed (see https://github.com/vercel/next.js/issues/38119#issuecomment-1172099259)
COPY --from=builder --chown=node:node /home/node/app/.next/standalone ./
COPY --from=builder --chown=node:node /home/node/app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
