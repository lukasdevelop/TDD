
const store = (request, response) => {

    const { email, password } = request.body

    return response.status(200).json({msg: email})
}

module.exports =  { store }