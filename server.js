const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const { port, generateUrlDB } = require('./configuration/config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./src/location/location.routes'));
app.use(require('./src/user/user.routes'));
app.use(require('./src/role/role.routes'));
app.use(require('./src/rulesBussines/rulesBusiness.routes'));
app.use(require('./src/team/team.routes'));
app.use(require('./src/login/login.routes'));

const db = generateUrlDB();

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
