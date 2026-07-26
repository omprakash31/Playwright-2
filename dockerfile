# Use Microsoft's official Playwright image
FROM mcr.microsoft.com/playwright:v1.61.1-jammy

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy remaining project files
COPY . .

# Run Playwright tests when container starts
CMD ["npx", "playwright", "test"]