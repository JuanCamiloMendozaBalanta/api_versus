const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const { port, shema, host, db_port } = require('./configuration/config')

const app = express()

app.use(require('./role/role.routes'))

const db = `mongodb://${host}:${db_port}/${shema}`

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })


app.listen(port, () => {
    console.log(`Versus listening on port ${port}`)
})