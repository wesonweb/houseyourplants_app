const express = require('express')
const router = express.Router()
const UserModel = require('../models/UserModel')

const { loginUser, registerUser } = require('../controllers/userController')


// login route
router.post('/login', loginUser)

// register route
router.post('/register', registerUser)

module.exports = router
