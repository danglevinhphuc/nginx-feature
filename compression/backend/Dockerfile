# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]