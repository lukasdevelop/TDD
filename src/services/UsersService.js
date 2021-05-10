const connection = require("../database/connection")

const create = async (data) => {

    const {name, email, password_hash } = data
    
    const user = await connection('users').insert({
        name,
        email,
        password_hash
    })

    return user
}

module.exports = { create }