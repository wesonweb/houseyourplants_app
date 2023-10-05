import PropTypes from 'prop-types'

const PlantFlowers = ({ register }) => {
  return (
    <div className="relative flex gap-x-3 my-6">
      <div className="flex h-6 items-center">
        <input
          id="flowers"
          {...register("flowers")}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
        />
      </div>

      <div className="text-sm leading-6">
        <label
          htmlFor="flowers"
          className="font-medium text-gray-900">
          Does it flower?
        </label>
        <p className="text-gray-500">Check this box if the plant produces flowers</p>
      </div>

      <div className="flex h-6 items-center">
        <input
          id="toxicity"
          {...register("toxicity")}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
        />
      </div>

      <div className="text-sm leading-6">
        <label htmlFor="toxicity" className="font-medium text-gray-900">
          Is the plant toxic?
        </label>
        <p className="text-gray-500">Check this box if the plant is toxic to humans or animals</p>
      </div>
    </div>
  )
}

PlantFlowers.propTypes = {
  register: PropTypes.func.isRequired,
}

export default PlantFlowers
