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
        req.user = await User.findOne({_id})
        // authorise routes by admin role only
        if (req.user?.role !== 'admin') {
            console.log('You are not authorized to do that ❌ ')
            return res.status(401).json({ error: 'Unauthorized' })
        }
        console.log('You are authorized - action saved ✅ ')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Invalid token' })
    }
}


// check admin role middleware
// const checkRole = async (req, res, next) => {

//      const { authorization } = req.headers
//     // check if token exists
//     if (!authorization) {
//         return res.status(401).json({ message: 'Authorization token required' })
//     }
//     const token = authorization.split(' ')[1]
//     try {
//         const { _id } = jwt.verify(token, process.env.TOKEN_SECRET)
//         // use the _id to find the user
//         const user = await User.findOne({_id})
//         console.log('finding this user: 👦 ', user)
//         if (user.role !== 'admin') {
//             console.log('You are not authorized ❌ ')
//             return res.status(401).json({ error: 'Unauthorized' })
//         }
//         console.log('You are authorized ✅ ')
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(401).json({ error: 'Invalid token' })
//     }
// }


module.exports = {requireAuth}















// const jwt = require('jsonwebtoken')

// const User = require('../models/UserModel')

// const requireAuth = async (req, res, next) => {

//     // verify user is authenticated
//     const { authorization } = req.headers
//     // check if token exists
//     if (!authorization) {
//         return res.status(401).json({ message: 'Authorization token required' })
//     }
//     // get the token and remove the Bearer
//     const token = authorization.split(' ')[1]
//     // verify token
//     try {
//         // get the id from the token - verify it first
//         const { _id } = jwt.verify(token, process.env.TOKEN_SECRET)
//         // use the _id to find the user
//         req.user = await User.findOne({_id}).select('_id')
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(401).json({ error: 'Invalid token' })
//     }
// }

// // check admin role middleware
// const checkRole = async (req, res, next) => {

//      const { authorization } = req.headers
//     // check if token exists
//     if (!authorization) {
//         return res.status(401).json({ message: 'Authorization token required' })
//     }
//     const token = authorization.split(' ')[1]
//     try {
//         const { _id } = jwt.verify(token, process.env.TOKEN_SECRET)
//         // use the _id to find the user
//         const user = await User.findOne({_id})
//         console.log('finding this user: 👦 ', user)
//         if (user.role !== 'admin') {
//             console.log('You are not authorized ❌ ')
//             return res.status(401).json({ error: 'Unauthorized' })
//         }
//         console.log('You are authorized ✅ ')
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(401).json({ error: 'Invalid token' })
//     }
// }


// module.exports = {requireAuth, checkRole}
