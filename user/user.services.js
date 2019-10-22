
const User = require('./user.model')

const saveUser = async (info) => {
    const { dateOfBirth, email, middlename, name, username, role } = info
    const newUser = new User({
        dateOfBirth, email, middlename, name, username, role
    })
    try {
        const user = await newUser.save()
        return user

    } catch (error) {
        return error
    }

}

const getUserById = async (info) => {

}


module.exports = {
    saveUser,
    getUserById
}