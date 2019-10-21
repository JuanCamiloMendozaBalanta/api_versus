const express = require('express')
const app = express()

app.get('/role', (req, res) => {
    res.json()
})

app.get('/role/{code}', (req, res) => {
    res.json()
})