const { ROLES } = require('../utils/constants')
const { manageError } = require('../utils/errors')

const getRoles = () => {
    try {
        let response = ROLES.length > 0 ? ROLES : []
        return response
    } catch (error) {
        manageError(error)
        return error
    }
}

const getRolesByCode = (code) => {
    try {
        let response
        if (ROLES.length > 0) {
            const role = ROLES.find(ele => ele.code === code);
            response = role ? role : null
        }
        return response
    } catch (error) {
        manageError(error)
        return error
    }

}

module.exports = {
    getRoles,
    getRolesByCode
}