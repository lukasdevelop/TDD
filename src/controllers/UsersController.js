const usersService = require('../services/UsersService')

const create = (request, response) => {
    const {name, email, password_hash} = request.body

    const user = usersService.create({name, email, password_hash})

    return response.status(user.statusCode).json(user.msg)
}

module.exports = { create }