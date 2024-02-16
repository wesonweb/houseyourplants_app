const jwt = require('jsonwebtoken')

const User = require('../models/UserModel')

const requireAuth = async (req, res, next) => {

    // verify user is authenticated
    const { authorization } = req.headers
    // check if token exists
    if (!authorization) {
        return res.status(401).json({ message: 'Authorization token required' })
    }
    // get the token and remove the Bearer
    const token = authorization.split(' ')[1]
    // verify token
    try {
        // get the id from the token - verify it first
        const { _id } = jwt.verify(token, process.env.TOKEN_SECRET)
        // use the _id to find the user
        req.user = await User.findOne({_id}).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Invalid token' })
    }
}
module.exports = requireAuth
