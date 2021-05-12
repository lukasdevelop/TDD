const bcrypt = require('bcryptjs')
const connection = require('../../src/database/connection')

describe('User', () => {
   
    it('should encrypt user password', async () => {

        const hash = await bcrypt.hash('123456', 8)

        const user = await connection('users').insert({
            name: 'Teste',
            email: 'teste@teste.com',
            password_hash: hash
        }).returning('password_hash')
        

        expect(user[0]).toBe(hash)
    })
})