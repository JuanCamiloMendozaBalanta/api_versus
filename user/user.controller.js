
const { findUsers, findUserByEmail, saveUser } = require('./user.services')

const createUser = async (info) => {
    try {
        const { email } = info
        const user = await findUserByEmail(email)
        if (user && user.id) {

        } else {
            const newUser = await saveUser(info)
            return newUser
        }
    } catch (error) {
        return error
    }
}

const getUsers = async () => {
    try {
        return await findUsers()
    } catch (error) {
        return error
    }
}

const getUserByEmail = async (email) => {
    try {
        return await findUserByEmail(email)
    } catch (error) {
        return error
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserByEmail
}