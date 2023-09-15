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
    problems,
    care_level
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
      problems,
      care_level
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
  } catch (err) {
    console.log(err)
    return res.status(400).json({message: 'Error trying to get plants'})
  }
}

// get a plant by id

const getPlant = async (req, res) => {
  const { id } = req.params
  try {
    const plant = await Plant.findById(id)
    res.status(200).json(plant)
  } catch (err) {
    console.log(err)
    return res.status(400).json({message: `Error could not find plant with id of ${id}`})
  }
}

// update a plant by id (PATCH)

const editPlant = async (req, res) => {
  const { id } = req.params
  try {
    const plant = await Plant.findOneAndUpdate({_id: id}, {...req.body})
    return res.status(200).json(plant)
  } catch (err) {
    console.log(err)
    return res.status(400).json({message: `Could not find a plant with id of ${id}`})
  }

}

// delete a plant by id

const deletePlant = async (req, res) => {
  const { id } = req.params
  try {
    const plant = await Plant.findByIdAndDelete({_id: id})
    if (!plant) {
      return res.status(400).json({message: `could not find plant`})
    }
    return res.status(200).json({message: `plant deleted`})

  } catch (err) {
    console.log(err)
    return res.status(400).json({message: `could not find plant`})
  }
}

module.exports = {
  createPlant,
  getPlants,
  getPlant,
  editPlant,
  deletePlant
}
