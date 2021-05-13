const jwt = require('jsonwebtoken')

const userMock = {
    name: "Lucas",
    email: "lucas@email.com",
    password_hash: "123456"
}

const generateToken = (id) => {
    return jwt.sign(id, process.env.APP_SECRET)
}

module.exports = {
    generateToken,
    userMock
}