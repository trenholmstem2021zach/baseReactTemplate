# ==== CONFIGURE =====ls

# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .

ARG authdomain
ARG clientid
ENV REACT_APP_AUTH0DOMAIN $authdomain
ENV REACT_APP_AUTH0CLIENTID $clientid

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn 
# Build the app
RUN yarn build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production


# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]