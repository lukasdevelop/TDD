import { Router } from 'express'
import * as usersController from './controllers/UsersController'

const routes = Router()

routes.post('/users', usersController.create)

export default routes