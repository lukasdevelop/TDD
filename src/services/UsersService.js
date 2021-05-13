const connection = require("../database/connection")
const bcrypt = require('bcryptjs')



const create = async (data) => {

    const { name, email, password_hash } = data

    const hash = await bcrypt.hash(password_hash, 8)

    try {

        const [user] = await connection('users').insert({
            name,
            email,
            password_hash: hash
        }).returning(['name', 'email'])

        return {
            statusCode: 200, msg: user
        }

    } catch (err) {
        return { statusCode: 500, msg: err }
    }

}

module.exports = { create }