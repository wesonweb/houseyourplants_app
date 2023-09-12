const Plant = require('../models/plantModel')



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
  }
}

// get all plants

// get a plant by id

// update a plant by id

// delete a plant by id

module.exports = {
  createPlant
}
