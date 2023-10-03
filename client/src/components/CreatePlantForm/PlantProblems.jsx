import PropTypes from 'prop-types'

const PlantProblems = ({ register, textInputStyle }) => {
  return (
    <div className="my-6">
        <h2 className="text-xl">Problems with this plant</h2>
        <label
          htmlFor="problems"
          className="block text-sm font-medium leading-6 text-gray-900">
            Issues that are common to this plant
        </label>
        <div className="mt-2">
          <textarea
            id="problems"
            {...register("problems")}
            rows={5}
            className={textInputStyle}
            placeholder="eg prone to spider mites"
            defaultValue={''}
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">Enter any problems common to this plant.</p>
    </div>
  )
}

PlantProblems.propTypes = {
  register: PropTypes.func.isRequired,
  textInputStyle: PropTypes.string.isRequired
}

export default PlantProblems
