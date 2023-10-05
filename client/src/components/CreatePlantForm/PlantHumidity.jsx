import PropTypes from 'prop-types'

const PlantHumidity = ({ register, textInputStyle }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl">Humidity</h2>
      <label
        htmlFor="humidity"
        className="block text-sm font-medium leading-6 text-gray-900">
          Enter humidity requirements
      </label>
      <div className="mt-2">
        <textarea
          id="humidity"
          {...register("humidity")}
          rows={5}
          className={textInputStyle}
          placeholder="eg mist regularly"
          defaultValue={''}
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">Enter the humidity requirements for this plant.</p>
    </div>
  )
}

PlantHumidity.propTypes = {
  register: PropTypes.func.isRequired,
  textInputStyle: PropTypes.string.isRequired
}

export default PlantHumidity
