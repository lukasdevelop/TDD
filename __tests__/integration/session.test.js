const connection = require('../../src/database/connection')
const { app } = require('../../src/app')
const request = require('supertest')
const sessionService = require('../../src/services/SessionService')


describe('Authentication', () => {
    afterAll(async () => {
        await connection('users').truncate()
    })

    it("should authenticate with valid  credentials", async () => {

        const data = {
            name: "Lucas",
            email: "lucas@email.com",
            password_hash: "123456"
        }

        const [userCreate] = await connection('users').insert(data).returning(['email', 'password_hash'])

        const user = await sessionService.store(userCreate)

        expect(user.statusCode).toBe(200)
    })

    it("not should authenticate with not valid  credentials", async () => {

        const data = {
            name: "Lucas",
            email: "lucas@email.com",
            password_hash: "senhaerrada"
        }

        const user = await sessionService.store(data)

        expect(user.statusCode).toBe(401)
    })

    it("it should return a token", async () => {

        const data = {
            name: "Lucas",
            email: "lucas@email.com",
            password_hash: "123456"
        }
        const user = await sessionService.store(data)

        expect(user).toHaveProperty("token")
    })


})
