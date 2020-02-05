const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { port, shema, host, db_port } = require('./configuration/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./src/location/location.routes'));
app.use(require('./src/player/player.routes'));
app.use(require('./src/role/role.routes'));
app.use(require('./src/rulesBussines/rulesBusiness.routes'));
app.use(require('./src/team/team.routes'));
app.use(require('./src/login/login.routes'));


const db = `mongodb://${host}:${db_port}/${shema}`;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.listen(port, () => {
  console.log(`Versus listening on port ${port}`);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});
