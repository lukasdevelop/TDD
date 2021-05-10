const connection = require('../../src/database/connection')
const {app} = require('../../src/app')
const request = require('supertest')


describe('Authentication', () => {
    it("should authenticate with valid  credentials",  async () => {

        const user = await connection('users').insert({
            name:"Lucas",
            email: "lucas@email.com",
            password_hash: "123321"
        }).returning('email')
             

       const response = await request(app)
       .post('/session')
       .send({
           name:'lucas@email.com',
           password: '123456'
       })

       expect(response.status).toBe(200)
    })
})
