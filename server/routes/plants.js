const { createPlant, getPlants, getPlant } = require('../controllers/plantController')
const express = require('express')
const router = express.Router()

// GET all plants
router.get('/', getPlants)

// GET a single plant
router.get('/:id', getPlant)

// POST a single plant (create)
router.post('/', createPlant)

// DELETE a single plant
router.delete('/:id', (req, res) => {
  res.json({message: 'DELETE one plant'})
})

// PUT a single plant (update)
router.patch('/:id', (req, res) => {
  res.json({message: 'Update one plant (PUT)'})
})
module.exports = router
