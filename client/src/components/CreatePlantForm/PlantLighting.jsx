import PropTypes from 'prop-types'

const PlantLighting = ({ register }) => {
  return (
     <div className="my-8">
      <h2 className="text-xl">Lighting</h2>
      <fieldset>
        <legend className="text-gray-500">What are the lighting requirements for this plant:</legend>
        <span className=" block mt-1 text-gray-600"><strong>Note:</strong> a plant can cope with more than one lighting choice</span>
        <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="low"
                  {...register("lighting")}
                  value="low"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="low"
                  className="font-medium text-gray-900">
                    Low light
                </label>
                <p className="text-gray-500">This plant can cope with low lighting conditions.</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="medium"
                  {...register("lighting")}
                  type="checkbox"
                  value="medium"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="medium"
                  className="font-medium text-gray-900">
                    Medium light
                </label>
                <p className="text-gray-500">This plant can cope with medium lighting conditions.</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="direct"
                  {...register("lighting")}
                  value="direct"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="direct"
                  className="font-medium text-gray-900">
                    Direct light
                </label>
                <p className="text-gray-500">This plant can survive in direct light</p>
              </div>
            </div>
          </div>
        </fieldset>
    </div>
  )
}

PlantLighting.propTypes = {
  register: PropTypes.func.isRequired,
}

export default PlantLighting
