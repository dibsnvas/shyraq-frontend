# Stage 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Run the build
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy build output from the build stage
COPY --from=build /app/dist /app

# Install serve package to serve the built files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5174

# Start the application
CMD ["serve", "-s", "."]
