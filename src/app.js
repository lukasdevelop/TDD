import express from 'express'
import http from 'http'
import 'dotenv/config'
import routes from './routes'
import connection from './database/connection'
const app = express()

app.use(express.json())


const server = http.createServer(app)

app.use(routes)




export {
    server
}