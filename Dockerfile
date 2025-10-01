# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the port your app runs on (usually 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
