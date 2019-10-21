const { ROLES } = require('../utils/constants')
const { manageError } = require('../utils/errors')

const getRoles = (request, reply) => {
    try {
        if (ROLES.length > 0) {
            return ROLES;
        } else {
            reply({
                message: `We don't have roles`
            })
        }
    } catch (error) {
        manageError(error)
        return error
    }
}

module.exports = {
    getRoles
}