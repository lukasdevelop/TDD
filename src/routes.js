const { Router } = require('express')
const usersController = require('./controllers/UsersController')
const sessionController = require('./controllers/SessionController')

const routes = Router()

routes.post('/users', usersController.create)
routes.post('/session', sessionController.store)

module.exports = routes