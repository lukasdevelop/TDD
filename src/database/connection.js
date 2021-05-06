import knex from 'knex'
import 'dotenv/config'

import { development, production } from '../../knexfile'

let ambienteDefault = development;

if(process.env.NODE_ENV != 'development'){
    ambienteDefault = production
}

const connection = knex(ambienteDefault)

export default connection