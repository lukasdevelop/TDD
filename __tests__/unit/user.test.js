const bcrypt = require('bcryptjs')
const connection = require('../../src/database/connection')
const helpers = require('../../src/helpers')
const userService = require('../../src/services/UsersService')


describe('User', () => {

    it('should encrypt user password', async () => {

        const user = await userService.create(helpers.userMock)
    })
})