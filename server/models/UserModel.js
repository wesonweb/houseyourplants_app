const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

userSchema.statics.register = async function (username, email, password) {
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

module.exports = mongoose.model('User', userSchema)
