const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const { port, shema, host, db_port } = require('./configuration/config')

const db = `mongodb://${shema}:${db_port}/${host}`

mongoose.connect(db, { useNewUrlParser: true })

const app = express()
app.listen(port, () => {
    console.log(`Versus listening on port ${port}`)
})