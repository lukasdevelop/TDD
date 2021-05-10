const express = require('express')
const http = require('http')
require('dotenv/config')
const routes = require('./routes')
const connection = require('./database/connection')

const app = express()

app.use(express.json())


const server = http.createServer(app)

app.use(routes)




module.exports = { server, app }