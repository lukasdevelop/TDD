const { Router } = require('express')
const usersController = require('./controllers/UsersController')
const sessionController = require('./controllers/SessionController')
const authMiddleware = require('./middleware/auth')

const routes = Router()

routes.post('/users', usersController.create)
routes.post('/session', sessionController.store)
routes.get('/dashboard', authMiddleware, (req, res) => {
    return res.status(200).send()
})

module.exports = routes