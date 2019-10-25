
const { editUser, findUsers, findUserByEmail, findUserById, saveUser } = require('./user.services')
const { getRolesByCode } = require('../role/role.controller')
const { objectIsEmpty, removeEmptyOrNull } = require('../utils/gadgets')

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

const updateUser = async (id, info) => {
    let response
    try {
        const cleanInfo = removeEmptyOrNull(info)
        const update = await editUser(id, cleanInfo)
        if (!objectIsEmpty(cleanInfo)) {
            if (update.ok) {
                return response = await findUserById(id)
            }
            else {
                response = `Error try to update the user with id: ${id}, meaby the user doesn't exist`
            }
        } else {
            response = `The parameters to update the user can't be empty`
        }
        return response
    } catch (error) {
        return error
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserByEmail,
    updateUser
}