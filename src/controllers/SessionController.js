const sessionService = require('../services/SessionService')
const store = async (request, response) => {

    const user = await sessionService.store(request.body)

    if(user.statusCode === 401){
        return response.status(401).json(user.msg)
    }

    if(user.statusCode === 500){
        return response.status(500).json(user.msg)
    }

    return response.status(user.statusCode).json(user.msg)
}

module.exports =  { store }