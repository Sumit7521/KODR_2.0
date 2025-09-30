FROM node:18
#linux os + nodejs

WORKDIR /app 
#inside app

#COPY package.json ./
#COPY package-lock.json ./

# to write above in one line  => 
COPY package*json ./


RUN npm install

COPY server.js ./

#to allow communication on our working port
EXPOSE 3000