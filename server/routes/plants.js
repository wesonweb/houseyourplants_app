const { createPlant, getPlants, getPlant, editPlant, deletePlant } = require('../controllers/plantController')
const express = require('express')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// GET all plants
router.get('/', getPlants)

// GET a single plant
router.get('/:id', getPlant)

// require authentication for the following routes
router.use(requireAuth)

// POST a single plant (create)
router.post('/new-plant', createPlant)

// DELETE a single plant
router.delete('/:id', deletePlant)

// PUT a single plant (update)
router.patch('/edit/:id', editPlant)
module.exports = router
