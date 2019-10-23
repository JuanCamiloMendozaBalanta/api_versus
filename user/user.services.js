
const User = require('./user.model')

const findUserByEmail = async (email) => {
    try {
        return await User.findOne({ email })
    } catch (error) {
        return error
    }
}

const findUsers = async () => {
    try {
        return await User.find()
    } catch (error) {
        return error
    }
}

const saveUser = async (info) => {
    try {
        const { active, dateOfBirth, email, middlename, name, username, role } = info
        const newUser = new User({
            active, dateOfBirth, email, middlename, name, username, role
        })
        const user = await newUser.save()
        return user

    } catch (error) {
        return error
    }
}

const editUser = async (info) => {
    try {
        const { id, active, dateOfBirth, email, middlename, name, username, role } = info
        const user = await User.update({ _id: id }, {})
    } catch (error) {
        return error
    }
}

module.exports = {
    editUser,
    findUsers,
    findUserByEmail,
    saveUser
}