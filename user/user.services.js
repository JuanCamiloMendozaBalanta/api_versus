
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

const findUserByEmail = async (email) => {
    return await User.find({ email })
}


module.exports = {
    saveUser,
    findUserByEmail
}