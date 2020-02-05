'use strict';
require('dotenv').config();

const config = {
  port: process.env.PORT || 8081,
  shema: process.env.DB_SCHEMA,
  host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  expiration: 60 * 60 * 24
};

module.exports = config;
