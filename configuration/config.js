'use strict';
require('dotenv').config()

const config = {
    port: process.env.PORT || 8080,
    shema: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    db_port: process.env.DB_PORT
}

module.exports = config