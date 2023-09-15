const Plant = require('../models/PlantModel')

// create a new plant
const createPlant = async (req, res) => {
  const {
    image,
    common_name,
    scientific_name,
    description,
    lighting,
    feeding,
    watering,
    humidity,
    temperature,
    position,
    toxicity,
    flowers,
    problems
  } = req.body

  try {
    const newPlant = await Plant.create({
      image,
      common_name,
      scientific_name,
      description,
      lighting,
      feeding,
      watering,
      humidity,
      temperature,
      position,
      toxicity,
      flowers,
      problems
    })
    res.status(200).json(newPlant)
  } catch (err) {
    console.log(err)
    return res.status(400).json({message: 'Could not create plant'})
  }
}

// get all plants
const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find({}).sort({ createdAt : -1 })
    res.status(200).json(plants)
  } catch {
    console.log(err)
    return res.status(400).json({message: 'Error trying to get plants'})
  }
}

// get a plant by id

// update a plant by id (PATCH)

// delete a plant by id

module.exports = {
  createPlant,
  getPlants
}
