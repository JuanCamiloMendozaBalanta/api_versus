
const { saveUser, findUserByEmail } = require('./user.controller')

const createUser = (info) => {
    try {
        const { email } = info
        const user = findUserByEmail(email)
        if (user) {

        } else {
            return saveUser(info)
        }
    } catch (error) {
        return error
    }
}

const getUserByEmail = (email) => {
    try {
        return findUserByEmail(email)
    } catch (error) {
        return error
    }
}

module.exports = {
    createUser,
    getUserByEmail
}