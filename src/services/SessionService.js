const connection = require('../../src/database/connection')

const store = async (data) => {

    const {email, password_hash} = data

    try{
        const user = await connection('users')
        .select('*')
        .where('email', email)
        .andWhere('password_hash', password_hash)

        if(user.length === 0){
            return {statusCode: 401, msg: 'User or password incorrect.'}
        }

        return {statusCode: 200, msg: user}

    }catch(err){
        return {statusCode: 500, msg: err}
    }


}

module.exports = { store }