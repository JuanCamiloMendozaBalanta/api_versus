const express = require('express')
const app = express()

const { createUser, getUsers, getUserByEmail } = require('./user.controller')

app.get('/user', async (req, res) => {
    const users = await getUsers()
    if (users) {
        res
            .status(200)
            .json(users)
    } else {
        res
            .status(500)
            .json(users)
    }
})

app.get('/user/:email', async (req, res) => {
    const { email } = req.params
    const user = await getUserByEmail(email)
    if (user.id) {
        res
            .status(200)
            .json(user)
    } else {
        res
            .status(404)
            .json(user)
    }
})

app.post('/user', async (req, res) => {
    const user = await createUser(req.body)
    if (user.id) {
        res
            .status(200)
            .json(user)
    } else {
        res
            .status(500)
            .json(user)
    }
})

module.exports = app