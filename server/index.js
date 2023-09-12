require('dotenv').config()
const express = require('express')
const cors = require('cors')
const plantRoutes = require('./routes/plants')

const app = express()
app.use(cors({origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 5000

app.use('/api/plants', plantRoutes)

app.listen(`${PORT}`, () => {
  console.log(`Server started and listening on port ${PORT}`)
})
