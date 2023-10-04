import PropTypes from 'prop-types'

const PlantFeedingWatering = ({ register, textInputStyle, errorMessageStyle, errors }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl">Feeding and watering this plant</h2>

      <label
        htmlFor="watering"
        className="block text-sm font-medium leading-6 text-gray-900">
          Watering
      </label>
      <div className="mt-2">
        <textarea
          id="watering"
          {...register("watering", { required: "You must provide watering instructions" })}
          rows={5}
          className={textInputStyle}
          placeholder="eg water when the soil is dry to the touch"
        />
        <p className={errorMessageStyle}>{errors.watering?.message}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">Enter the watering instructions for this plant.</p>

    <div className="my-6">
      <label
        htmlFor="feeding"
        className="block text-sm font-medium leading-6 text-gray-900">
          Feeding
      </label>
      <textarea
        id="feeding"
        {...register("feeding", { required: "You must provide feeding instructions" })}
        rows={5}
        className={textInputStyle}
        placeholder="eg feed every 2 weeks in spring and summer"
      />
      <p className={errorMessageStyle}>{errors.feeding?.message}</p>
    </div>
    <p className="mt-3 text-sm leading-6 text-gray-600">Enter instructions for feeding this plant.</p>
    </div>
  )
}

PlantFeedingWatering.propTypes = {
  register: PropTypes.func.isRequired,
  textInputStyle: PropTypes.string.isRequired,
  errorMessageStyle: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
}

export default PlantFeedingWatering
