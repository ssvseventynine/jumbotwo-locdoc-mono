# Step 1: Use an official Node.js runtime image
FROM node:20-alpine AS build

# Step 2: Set the internal working directory for the React source code
WORKDIR /app

# Step 3: Copy package files first to optimize layer caching
COPY package*.json ./

# Step 4: Install the native npm node dependencies
RUN npm install

# Step 5: Copy the remaining React frontend files
COPY . .

# Step 6: CRITICAL FOR PLACEHOLDERS - Force production environment variable injection
ENV NODE_ENV=production
RUN npm run build

# Step 7: Use Nginx to serve the production build statically
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Step 8: Expose standard web port (maps perfectly to your Kubernetes service config)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]