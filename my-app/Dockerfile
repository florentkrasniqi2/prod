# Përdorim imazhin bazë Node.js
FROM node:alpine

# Krijojmë dosjen për aplikacionin
WORKDIR /app

# Kopjojmë package.json dhe instalohet varësia "express"
COPY package.json .
RUN npm install

# Kopjojmë të gjithë skedarët e tjerë të aplikacionit
COPY app.js .

# Ekspozoni portin 7000
EXPOSE 7000

# Fillojmë aplikacionin
CMD ["npm", "start"]
