const { createPlant, getPlants, getPlant, editPlant, deletePlant } = require('../controllers/plantController')
const express = require('express')
const { requireAuth } = require('../middlewares/requireAuth')

const router = express.Router()

// GET all plants
router.get('/', getPlants)

// GET a single plant
router.get('/:id', getPlant)

// require authentication for the following routes

// POST a single plant (create)
router.post('/new-plant', requireAuth, createPlant)

// DELETE a single plant
router.delete('/:id', requireAuth, deletePlant)

// PUT a single plant (update)
router.patch('/edit/:id', requireAuth,  editPlant)
module.exports = router
