# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine

WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# Install only production dependencies
RUN npm install --production

# Set environment variable to production
ENV NODE_ENV production

# Expose port 3000
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]
