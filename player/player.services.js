
const Player = require('./player.model')

const findPlayerByEmail = async (email) => {
    try {
        return await Player.findOne({ email })
    } catch (error) {
        return error
    }
}

const findPlayerById = async (id) => {
    try {
        return await Player.findOne({ _id: id })
    } catch (error) {
        return error
    }
}

const findPlayers = async () => {
    try {
        return await Player.find({ active: true })
    } catch (error) {
        return error
    }
}

const savePlayer = async (info) => {
    try {
        const { active, dateOfBirth, email, google, lastname, name, password, phone, username, role } = info
        const newPlayer = new Player({
            active, dateOfBirth, email, google, lastname, name, password, phone, username, role
        })
        const player = await newPlayer.save()
        return player

    } catch (error) {
        return error
    }
}

const editPlayer = async (id, info) => {
    try {
        const response = await Player.updateOne({ _id: id }, { $set: info })
        return response
    } catch (error) {
        return error
    }
}

module.exports = {
    editPlayer,
    findPlayers,
    findPlayerByEmail,
    findPlayerById,
    savePlayer
}