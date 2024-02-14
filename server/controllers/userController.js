const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
	return jwt.sign({_id}, process.env.TOKEN_SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
	const { email, password } = req.body
    console.log('loginUser', email, password)
	try {
		const user = await User.login(email, password)
        console.log('user logging in....🗡 ', user)
		// create token
		const token = createToken(user._id)
        // get the username and send it back with the response
        const { username  } = user
		res.status(200).json({ username, email, token })
	} catch (error) {
		console.log(error)
		res.status(400).json({ message: error.message })
	}
}

// register user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = await User.register(username, email, password)
		const token = createToken(user._id)
		console.log('new user created', token, user)
        res.status(201).json({ username, email, token })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    loginUser,
    registerUser
}
