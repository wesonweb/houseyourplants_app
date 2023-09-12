const express = require('express')
const router = express.Router()

// GET all plants
router.get('/', (req, res) => {
  res.json({message: 'GET all plants'})
})

// GET a single plant
router.get('/:id', (req, res)=> {
  res.json({message: `GET one plant with id ${req.params.id}`})
})

// POST a single plant (create)
router.post('/', (req, res) => {
  res.json({message: 'Create a new plant (POST)'})
})

// DELETE a single plant
router.delete('/:id', (req, res) => {
  res.json({message: 'DELETE one plant'})
})

// PUT a single plant (update)
router.patch('/:id', (req, res) => {
  res.json({message: 'Update one plant (PUT)'})
})
module.exports = router
