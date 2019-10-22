
const { saveUser } = require('./user.controller')

const createUser = (info) => {
    const { dateOfBirth, email, middlename, name, username, role } = info

}

module.exports = {
    createUser
}