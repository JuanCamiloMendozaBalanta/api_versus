const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { port, shema, host, db_port } = require('./configuration/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./location/location.routes'));
app.use(require('./player/player.routes'));
app.use(require('./role/role.routes'));
app.use(require('./rulesBussines/rulesBusiness.routes'));
app.use(require('./team/team.routes'));

const db = `mongodb://${host}:${db_port}/${shema}`;

let response;
const connection = () => {
  response = mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
};

connection();

if (response) {
  app.listen(port, () => {
    console.log(`Versus listening on port ${port}`);
  });
}

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});
