const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['basic', 'admin'],
        default: 'basic'
    }
}, { timestamps: true })

userSchema.statics.register = async function (username, email, password) {
    // ensure all fields are completed
    if (!username || !email || !password) {
        throw Error('All fields must be completed')
    }
    if (username.length < 3) {
        throw Error('Username must be at least 3 characters long')
    }
    // ensure email is valid
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    // ensure password is strong and at least 8 characters
    if (!validator.isStrongPassword(password, { minLength: 8 })) {
        throw Error('Password is not strong enough. It must contain capital, numbers and special characters')
    }
    // ensure user does not already exist
    const userExists = await this.findOne({ email })
    if (userExists) {
        throw Error ('User already exists')
    }
    // create the salt
    const salt = await bcrypt.genSalt(10)
    // hash the password
    const hash = await bcrypt.hash(password, salt)
    // create the user
    const user = await this.create({ username, email, password: hash })
    return user
}

userSchema.statics.login = async function (email, password) {
    // ensure all fields are completed
    if (!email || !password) {
        throw Error('All fields must be completed')
    }
    // find the user
    const user = await this.findOne( { email })
    if (!user) {
        throw Error('User does not exist with this email')
    }
    // compare the password
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        throw Error('Password is incorrect. Please try again')
    }
    return user
}
module.exports = mongoose.model('User', userSchema)
