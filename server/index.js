require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({origin: '*'}))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello, plant world!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server started and listening on port ${PORT}`)
})
