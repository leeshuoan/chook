FROM node:14
WORKDIR /app
RUN npm install -g firebase-tools
COPY functions/package*.json functions/
RUN cd functions && npm install && cd ..
COPY . .
WORKDIR /app/functions
EXPOSE 5001
CMD ["npm", "run", "serve" ]