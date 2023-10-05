const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const plantRoutes = require('./routes/plants')


dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI
const app = express()
app.use(cors({origin: '*'}))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))


app.use('/api/plants', plantRoutes)

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Connected to db, server started and listening on port ${PORT}`)
    })
  })
  .catch(err => console.log(err))
