FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Install 'serve' globally to serve the built dist directory
RUN npm install -g serve

CMD ["sh", "-c", "serve -s dist -l $PORT"]
