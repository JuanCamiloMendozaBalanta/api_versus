const { ROLES } = require('../utils/constants')
const { manageError } = require('../utils/errors')

const getRoles = () => {
    let response
    try {
        response = {
            roles: ROLES.length > 0 ? ROLES : []
        };
    } catch (error) {
        manageError(error)
        return error
    }
    return response
}

const getRolesByCode = (code) => {
    let response
    try {
        if (ROLES.length > 0) {
            const role = ROLES.find(ele => ele.code === code);
            response = role ? role : null
        }
    } catch (error) {
        manageError(error)
        return error
    }
    return response
}

module.exports = {
    getRoles,
    getRolesByCode
}