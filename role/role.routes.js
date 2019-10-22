const express = require('express')
const app = express()
const { getRoles, getRolesByCode } = require('./role.controller')

app.get('/role', (req, res) => {
    res
        .status(200)
        .json(getRoles())
})

app.get('/role/:code', (req, res) => {
    const { code } = req.params
    const role = getRolesByCode(code)
    if (role) {
        res
            .status(200)
            .json(role)
    } else {
        res
            .status(400)
            .json(role)
    }
})

module.exports = app