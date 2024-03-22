const express = require('express')
const router = express.Router()


const { loginUser, registerUser, resetPassword } = require('../controllers/userController')


// login route
router.post('/login', loginUser)

// register route
router.post('/register', registerUser)

// reset password
router.post('/password-reset', resetPassword)

module.exports = router
