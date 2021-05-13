const connection = require('../../src/database/connection')
const helpers = require('../../src/helpers')
const sessionService = require('../../src/services/SessionService')
const request = require('supertest')
const { app } = require('../../src/app')

describe('Authentication', () => {
    afterAll(async () => {
        await connection('users').truncate()
    })

    it("should authenticate with valid  credentials", async () => {

        const [userCreate] = await connection('users')
        .insert(helpers.userMock).returning(['email', 'password_hash'])

        const user = await sessionService.store(userCreate)

        expect(user.statusCode).toBe(200)
    })

    it("it should return a token", async () => {

        const user = await sessionService.store(helpers.userMock)

        expect(user).toHaveProperty("token")
    })

    it("not should authenticate with not valid  credentials", async () => {

        const data = helpers.userMock

        data.password_hash = 'senhaerrada'

        const user = await sessionService.store(data)

        expect(user.statusCode).toBe(401)
    })

    it('should be able to access private  routes without jwt token', async () => {

        const response = await request(app)
        .get('/dashboard')
        .set("Authorization", `Bearer ${helpers.generateToken(2)}`)

        expect(response.status).toBe(200)

    })


    it('should not be able to access private  routes without jwt token', async () => {

        const response = await request(app)
        .get('/dashboard')

        expect(response.status).toBe(401)

    })
    
    it('should not be able to access private routes with invalid jwt token', async () => {
        const response = await request(app)
        .get('/dashboard')
        .set("Authorization", `Bearer 34543443`)

        expect(response.status).toBe(401)
    })


})
