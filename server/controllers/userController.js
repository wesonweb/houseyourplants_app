const User = require('../models/UserModel')

// login user
const loginUser = async (req, res) => {
    res.json({message: 'login user route'})
}

// register user
const registerUser = async (req, res) => {
    res.json({message: 'register user route'})
}

module.exports = {
    loginUser,
    registerUser
}
