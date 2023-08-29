# Use the official Node.js image as the base image
FROM node:18

# Working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to /app and install dependencies
COPY package.json ./
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run (default is 80 for HTTP)
EXPOSE 8080

# Serve the built React app using a simple HTTP server like 'serve'
CMD ["npm", "run", "server"]