const connection = require('../../src/database/connection')
const jwt = require('jsonwebtoken')

const store = async (data) => {

    const {email, password_hash} = data

    try{
        const [user] = await connection('users')
        .select('*')
        .where('email', email)
        .andWhere('password_hash', password_hash)

        if(user === undefined){
            return {statusCode: 401, msg: 'User or password incorrect.'}
        }

        return {statusCode: 200, msg: user, token: generateToken(user.id)}

    }catch(err){
        return {statusCode: 500, msg: err}
    }


}

const generateToken = (id) => {
    return jwt.sign(id, process.env.APP_SECRET)
}


module.exports = { store, generateToken }