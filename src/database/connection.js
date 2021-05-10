const knex = require('knex')
require('dotenv/config')

const { development, production } = require('../../knexfile')

let ambienteDefault = development;

if(process.env.NODE_ENV != 'development'){
    ambienteDefault = production
}

const connection = knex(ambienteDefault)

module.exports = connection