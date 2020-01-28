#Specify a base image
FROM node:10

# Bundle app source
COPY . .

# Install some dependencies
RUN npm install
RUN npm rebuild 


# Default command
CMD [ "npm", "start" ]