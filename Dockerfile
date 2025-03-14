# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm audit fix

# Copy the rest of the project files
COPY . .

# Expose the Vite development port
EXPOSE 5173

# Default command to run the app
CMD ["npm", "run", "dev", "--", "--host"]
