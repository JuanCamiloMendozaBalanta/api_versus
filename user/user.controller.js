
const { findUsers, findUserByEmail, saveUser } = require('./user.services')
const { getRolesByCode } = require('./../role/role.controller')

const createUser = async (info) => {
    try {
        let response
        const { email, role } = info
        const _role = getRolesByCode(role)
        if (_role) {
            const user = await findUserByEmail(email)
            if (!user) {
                const newUser = await saveUser(info)
                response = newUser
            } else {
                response = `The user with the email ${email} already exist`
            }
        } else {
            response = `The role ${role} doesnt's exist`
        }
        return response
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