const express = require('express')
const app = express()

const { createUser } = require('./user.controller')

app.get('/user', (req, res) => {

})

app.get('/user/:id', (req, res) => {
    res
        .status(200)
        .json(getUserById())
})

app.post('/user', (req, res) => {
    console.log('===>', req.body)
    const user = createUser(req.body)
    console.log('===>', user)
    if (user._id) {
        res
            .status(200)
            .json(user)
    } else {
        res
            .status(500)
            .json(user)
    }
})

app.put('/user/:id', (req, res) => {
    res
        .status(200)
        .json(editUser())
})

module.exports = app