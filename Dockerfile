#Specify a base image
FROM node:10

# Create app directory
WORKDIR /usr/src/versus

# Bundle app source
COPY ./ ./

# Install some dependencies
RUN npm install
RUN npm rebuild 


# Default command
CMD [ "npm", "start" ]