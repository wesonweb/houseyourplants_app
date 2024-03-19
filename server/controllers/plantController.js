const Plant = require('../models/PlantModel')
const { cloudinary } = require('../utils/cloudinary')

// create a new plant
const createPlant = async (req, res) => {
    let {
    image,
    commonName,
    scientificName,
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
    careLevel
} = req.body


    try {
    const uploadResponse = await cloudinary.uploader.upload(image, {
        upload_preset: 'houseyourplants'
    })
    image = {
        publicId: uploadResponse.public_id,
        url: uploadResponse.secure_url
    }

    const newPlant = await Plant.create({
        image,
        commonName,
        scientificName,
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
        careLevel
    })
    res.status(200).json(newPlant)
    } catch (err) {
        console.error(err)
        return res.status(400).json({message: 'Could not create plant'})
    }
    }

// get all plants
const getPlants = async (req, res) => {
    const { toxicity, flowers, lighting, position } = req.query
    const noQuery = Object.keys(req.query).length === 0

    let searchQuery = {}
    searchQuery['$and'] = []

    for (let key in req.query) {
        if (key === 'toxicity') {
            searchQuery['$and'].push({ toxicity: toxicity })
        }
        if (key === 'flowers') {
            searchQuery['$and'].push({ flowers: flowers })
        }
        if (key === 'lighting')  {
            if (typeof(lighting) === 'string') {
            searchQuery['$and'].push({ lighting: lighting })
            } else {
                Object.keys(lighting).forEach(key => {
                    searchQuery['$and'].push({ lighting: lighting[key] })
                })
            }
        }
        if (key === 'position')  {
            if (typeof(position) === 'string') {
            searchQuery['$and'].push({ position: position })
            } else {
                Object.keys(position).forEach(key => {
                    searchQuery['$and'].push({ position: position[key] })
                })
            }
        }
    }

	try {
		if (noQuery) {
			const plants = await Plant.find().sort({ commonName : 1 })
			res.status(200).json(plants)
		} else {
            const plants = await Plant.find(searchQuery).sort({ commonName : 1 })
            res.status(200).json(plants)
		}
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
    let { image } = req.body
    if (req.user.role === 'admin') {
        try {
            if (typeof(image) === 'string') {
            const uploadResponse = await cloudinary.uploader.upload(image, {
            upload_preset: 'houseyourplants'
            })
            image = {
                publicId: uploadResponse.public_id,
                url: uploadResponse.secure_url
            }
        }
        const plant = await Plant.findOneAndUpdate({_id: id}, {...req.body, image}, {new: true})
            return res.status(200).json(plant)
        } catch (err) {
            console.log(err)
            return res.status(400).json({message: `Could not find a plant with id of ${id}`})
        }
    }   else {
        return res.status(401).json({message: `You are not authorized to do that`})
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
