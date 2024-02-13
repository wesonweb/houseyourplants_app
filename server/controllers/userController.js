const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
    res.json({message: 'login user route'})

}

// register user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.register(username, email, password)
        console.log(user)
        res.status(201).json({username, email, user})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    loginUser,
    registerUser
}
