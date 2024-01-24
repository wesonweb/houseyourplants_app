import PropTypes from 'prop-types'

const PlantHumidity = ({ register, textInputStyle, formLabelDefaultStyle, errors, errorMessageStyle }) => {
  return (
    <div className="my-6">
      <h2 className="text-xl">Temperature and humidity</h2>

      <div className="my-4">
          <label
            className={formLabelDefaultStyle}
            htmlFor="temperature">
            Temperature requirements
          </label>
          <input
            className={textInputStyle}
            id="temperature"
            type="text"
            placeholder="eg 16 - 21"
            {...register('temperature', {
              required: 'You must provide the plants temperature requirements',
              pattern: {
                value: /^[0-9]{1,2}-[0-9]{1,2}$/,
                message: 'Temperature must be a range of numbers eg 18-25'
              }
            })}
          />
          <p className={errorMessageStyle}>{errors.temperature?.message}</p>
        </div>

      <label
        htmlFor="humidity"
        className="block text-sm font-medium leading-6 text-gray-900">
          Enter humidity requirements
      </label>
      <div className="mt-2">
        <textarea
          id="humidity"
          {...register("humidity", { required: "You must provide humidity requirements" })}
          rows={5}
          className={textInputStyle}
          placeholder="eg mist regularly"
        />
        <p className={errorMessageStyle}>{errors.humidity?.message}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">Enter the humidity requirements for this plant.</p>
    </div>
  )
}

PlantHumidity.propTypes = {
  register: PropTypes.func.isRequired,
  formLabelDefaultStyle: PropTypes.string.isRequired,
  textInputStyle: PropTypes.string.isRequired,
  errorMessageStyle: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
}

export default PlantHumidity
