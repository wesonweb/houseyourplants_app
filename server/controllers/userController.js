const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
	return jwt.sign({_id}, process.env.TOKEN_SECRET, { expiresIn: '1hr' })
}

// login user
const loginUser = async (req, res, next) => {
	const { email, password } = req.body

	try {
		const user = await User.login(email, password)
		// create token
		const token = createToken(user._id)
        // get the username and send it back with the response
        const { role, username  } = user
		res.status(200).json({ username, email, role, token })
        next()
	} catch (error) {
		console.log(error)
		res.status(400).json({ message: error.message })
	}
}

// register user
const registerUser = async (req, res) => {
    const { username, email, password} = req.body
    try {
        const user = await User.register(username, email, password)
		const token = createToken(user._id)
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
