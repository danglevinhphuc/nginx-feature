# Dockerfile
FROM nginx:alpine

# Copy the Nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf
# Copy the React build files
COPY ./build /usr/share/nginx/html