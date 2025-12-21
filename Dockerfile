# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG BUN_VERSION=1

################################################################################
# Use bun image for base image for all stages.
FROM oven/bun:${BUN_VERSION}-alpine AS base

# Set working directory for all build stages.
WORKDIR /app


################################################################################
# Create a stage for installing production dependecies.
FROM base AS deps

# Copy package.json so that package manager commands can be used.
COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile

################################################################################
# Create a stage for building the application.
FROM deps AS build

# Copy the rest of the source files into the image.
COPY . .
# Run the build script.
RUN bun install --frozen-lockfile && bun run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base AS final

# Use production node environment by default.
ENV NODE_ENV=production

RUN mkdir -p /app/.next/cache/images && chown -R bun:bun /app/.next

# Run the application AS a non-root user.
USER bun

# Copy package.json so that package manager commands can be used.
COPY package.json .

# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["bun", "run", "start"]
