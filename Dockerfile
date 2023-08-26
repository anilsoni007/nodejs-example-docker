FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install
#copy application sourc code to working directory.
COPY . .
EXPOSE 3000
CMD ["node","index.js"]
