import connection from '../../src/database/connection'

describe('Authentication', () => {
    it("should sum two numbers", async () => {
        const user = await connection('users').insert({
            name: "Lucas",
            email:"lucas@email.com",
            password_hash: "12344321"
        })

        console.log(user)
        
        expect(user.email).toBe('lucas@email.com')
    })
})