'use strict';
require('dotenv').config();

const shema = process.env.DB_SCHEMA;
const host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const environment = process.env.NODE_ENV;
const jwt_expiration = 60 * 60 * 24;
const port = process.env.PORT || 8081;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

const generateUrlDB = () => {
  let url;
  if (environment === 'DEV') {
    url = `mongodb://${host}:${db_port}/${shema}`;
  } else {
    url = `mongodb+srv://${db_user}:${db_password}@versus-om9g3.mongodb.net/test`;
  }
  return url;
};

const config = {
  port,
  shema,
  host,
  db_port,
  environment,
  jwt_expiration,
  generateUrlDB
};

module.exports = config;
