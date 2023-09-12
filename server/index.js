require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello, plant world!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server started and listening on port ${PORT}`)
})
