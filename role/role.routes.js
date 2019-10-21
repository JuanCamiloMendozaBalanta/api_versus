const express = require('express')
const app = express()
const { getRoles } = require('../role/role.controller')

app.get('/role', (req, res) => {
    return res(getRoles())
})

app.get('/role/{code}', (req, res) => {
    res.json()
})