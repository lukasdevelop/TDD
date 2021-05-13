const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization

    if(!authHeader) {
        return response.status(401).json({ msg: 'Token not provided'})
    }

    const [, token] = authHeader.split(' ')

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET)
        /*await jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
            if(err)
                //do to err status 401 err
                request.userId = decoded
        })
        */
        request.userId = decoded

        return next()

    } catch(err){
        return response.status(401).json({ msg: err})
    }
}