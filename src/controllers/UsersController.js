const usersService = require('../services/UsersService')

const create = async (request, response) => {

    const user = await usersService.create(request.body)

    return response.status(user.statusCode).json(user.msg)
}

module.exports = { create }