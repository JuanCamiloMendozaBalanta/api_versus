
const User = require('./team.model')

const findUserByEmail = async (email) => {
    try {
        return await User.findOne({ email })
    } catch (error) {
        return error
    }
}

const findUserById = async (id) => {
    try {
        return await User.findOne({ _id: id })
    } catch (error) {
        return error
    }
}

const findUsers = async () => {
    try {
        return await User.find({ active: true })
    } catch (error) {
        return error
    }
}

const saveUser = async (info) => {
    try {
        const { active, dateOfBirth, email, google, lastname, name, password, phone, username, role } = info
        const newUser = new User({
            active, dateOfBirth, email, google, lastname, name, password, phone, username, role
        })
        const user = await newUser.save()
        return user

    } catch (error) {
        return error
    }
}

const editUser = async (id, info) => {
    try {
        const response = await User.updateOne({ _id: id }, { $set: info })
        return response
    } catch (error) {
        return error
    }
}

module.exports = {
    editUser,
    findUsers,
    findUserByEmail,
    findUserById,
    saveUser
}