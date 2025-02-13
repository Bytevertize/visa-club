FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN turbo prune web --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install --network-timeout 100000

COPY --from=builder /app/out/full/ .

ARG GRAPHQL_ENDPOINT
ARG NEXT_PUBLIC_PAYLOAD_ENDPOINT
ARG NEXT_PUBLIC_LANG_COOKIE
ARG PAYLOAD_DRAFT_TOKEN
ARG PAYLOAD_HOSTNAME

ENV PAYLOAD_HOSTNAME=${PAYLOAD_HOSTNAME}
ENV GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT}
ENV NEXT_PUBLIC_PAYLOAD_ENDPOINT=${NEXT_PUBLIC_PAYLOAD_ENDPOINT}
ENV NEXT_PUBLIC_LANG_COOKIE=${NEXT_PUBLIC_LANG_COOKIE}
ENV PAYLOAD_DRAFT_TOKEN=${PAYLOAD_DRAFT_TOKEN}

# The --filter=web... argument specifies the target filter to build
# This is useful when the monorepo contains multiple targets
# and we only want to build the web target
RUN yarn turbo run build --filter=web...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/web/next.config.js .
COPY --from=installer /app/apps/web/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
# COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

ARG GRAPHQL_ENDPOINT
ARG NEXT_PUBLIC_PAYLOAD_ENDPOINT
ARG NEXT_PUBLIC_LANG_COOKIE
ARG PAYLOAD_DRAFT_TOKEN
ARG PAYLOAD_HOSTNAME

ENV PAYLOAD_HOSTNAME=${PAYLOAD_HOSTNAME}
ENV GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT}
ENV NEXT_PUBLIC_PAYLOAD_ENDPOINT=${NEXT_PUBLIC_PAYLOAD_ENDPOINT}
ENV NEXT_PUBLIC_LANG_COOKIE=${NEXT_PUBLIC_LANG_COOKIE}
ENV PAYLOAD_DRAFT_TOKEN=${PAYLOAD_DRAFT_TOKEN}

CMD node apps/web/server.js
