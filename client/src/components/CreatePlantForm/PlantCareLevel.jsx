import PropTypes from 'prop-types'

const PlantCareLevel = ({ register, formLabelStandardStyle }) => {
  return (
    <div className="my-8">
      <label
        htmlFor="careLevel"
        className={formLabelStandardStyle}
        >
          Is the plant easy or hard to care for?
      </label>
      <select
        {...register("careLevel")}
        id="careLevel"
        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600  sm:leading-6"
        >
        <option value="easy">Easy</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  )
}

PlantCareLevel.propTypes = {
  register: PropTypes.func.isRequired,
  formLabelStandardStyle: PropTypes.string.isRequired,
}

export default PlantCareLevel
