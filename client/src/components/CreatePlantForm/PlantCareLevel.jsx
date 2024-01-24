import PropTypes from 'prop-types'

const PlantCareLevel = ({ register, formLabelDefaultStyle, errors, errorMessageStyle }) => {
  return (
    <div className="my-8">
      <label
        htmlFor="careLevel"
        className={formLabelDefaultStyle}
        >
          Is the plant easy or hard to care for?
      </label>
      <select
        defaultValue=""
        {...register("careLevel", { required: "Please choose a level of care for this plant" })}
        id="careLevel"
        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600  sm:leading-6"
        >
        <option value="" disabled hidden>Select a care level</option>
        <option value="easy">Easy</option>
        <option value="hard">Hard</option>
      </select>
      <p className={errorMessageStyle}>{errors.careLevel?.message}</p>
    </div>
  )
}

PlantCareLevel.propTypes = {
  register: PropTypes.func.isRequired,
  formLabelDefaultStyle: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  errorMessageStyle: PropTypes.string.isRequired,
}

export default PlantCareLevel
