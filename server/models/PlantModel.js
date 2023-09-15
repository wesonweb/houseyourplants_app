const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlantSchema = new Schema({
    image: {
      type: String
    },
    common_name: {
      type: String,
      required: true
    },
    scientific_name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    lighting: {
      type: [String],
      required: true
    },
    feeding: {
      type: String,
      required: true
    },
    watering: {
      type: String,
      required: true
    },
    humidity: {
      type: String,
      required: true
    },
    temperature: {
      type: String,
      required: true
    },
    position: {
      type: [String],
      required: true
    },
    toxicity: {
      type: Boolean,
      required: true
    },
    flowers: {
      type: Boolean,
      required: true
    },
    problems: {
      type: [String],
    },
    care_level: {
      type: String,
      required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Plant', PlantSchema)
