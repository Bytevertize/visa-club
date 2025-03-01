

# ===============================================================================

# FROM base as runtime

# ENV NODE_ENV=production
# ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# WORKDIR /home/node/app
# COPY package*.json  ./
# COPY yarn.lock ./

# RUN yarn install --production
# COPY --from=builder /home/node/app/dist ./dist
# COPY --from=builder /home/node/app/build ./build

# CMD ["node", "dist/server.js"]

# ===============================================================================

FROM node:18-alpine AS base

# The web Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update this Dockerfile, the Dockerfile in the web workspace and copy that over to Dockerfile in the docs.

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune admin-panel --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install --network-timeout 100000

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

ARG PAYLOAD_PUBLIC_WEB_ENDPOINT
ARG PAYLOAD_PUBLIC_OWN_ENDPOINT
ARG PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN
ARG DATABASE_URI
ARG PAYLOAD_PUBLIC_BUCKET_ACCESS
ARG PAYLOAD_SECRET
ARG MEDIA_URL
ARG PORT

ENV DATABASE_URI=${DATABASE_URI}
ENV PAYLOAD_PUBLIC_WEB_ENDPOINT=${PAYLOAD_PUBLIC_WEB_ENDPOINT}
ENV PAYLOAD_PUBLIC_OWN_ENDPOINT=${PAYLOAD_PUBLIC_OWN_ENDPOINT}
ENV PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN=${PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN}
ENV PAYLOAD_PUBLIC_BUCKET_ACCESS=${PAYLOAD_PUBLIC_BUCKET_ACCESS}
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}
ENV MEDIA_URL=${MEDIA_URL}
ENV PORT=${PORT}

RUN yarn turbo build --filter=admin-panel...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 payload
RUN adduser --system --uid 1001 payload
USER payload

COPY --from=installer /app .

ARG PAYLOAD_PUBLIC_WEB_ENDPOINT
ARG PAYLOAD_PUBLIC_OWN_ENDPOINT
ARG PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN
ARG DATABASE_URI
ARG PAYLOAD_PUBLIC_BUCKET_ACCESS
ARG PAYLOAD_SECRET
ARG MEDIA_URL
ARG PORT

ENV PAYLOAD_PUBLIC_WEB_ENDPOINT=${PAYLOAD_PUBLIC_WEB_ENDPOINT}
ENV PAYLOAD_PUBLIC_OWN_ENDPOINT=${PAYLOAD_PUBLIC_OWN_ENDPOINT}
ENV MEDIA_URL=${MEDIA_URL}

ENV PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN=${PAYLOAD_PUBLIC_WEB_DRAFT_TOKEN}
ENV PAYLOAD_PUBLIC_BUCKET_ACCESS=${PAYLOAD_PUBLIC_BUCKET_ACCESS}
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}
ENV DATABASE_URI=${DATABASE_URI}
ENV PORT=${PORT}

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=apps/admin-panel/dist/payload.config.js

CMD yarn turbo serve --filter=admin-panel
