import PropTypes from 'prop-types'

const PlantPosition = ({ register }) => {
  return (
    <div className="my-8">
      <h2 className="text-xl">Positioning</h2>
      <fieldset>
        <legend className="text-gray-500">Which positions will this plant do well in:</legend>
        <span className=" block mt-1 text-gray-600"><strong>Note:</strong> a plant can be positioned in more than one location</span>
        <div className="mt-6 space-y-6">
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="floor"
                {...register("position")}
                value="floor"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="floor"
                className="font-medium text-gray-900">
                  Floor
              </label>
              <p className="text-gray-500">This plant can grow tall and would suit being positioned on the floor.</p>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="table"
                {...register("position")}
                type="checkbox"
                value="table"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="table"
                className="font-medium text-gray-900">
                  Table
              </label>
              <p className="text-gray-500">This plant would suit positioned on a table.</p>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="hanging"
                {...register("position")}
                value="hanging"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="hanging"
                className="font-medium text-gray-900">
                  Hanging
              </label>
              <p className="text-gray-500">This plant trails and would do well positioned hanging</p>
            </div>
          </div>
        </div>
      </fieldset>
  </div>
  )
}

PlantPosition.propTypes = {
  register: PropTypes.func.isRequired,
}

export default PlantPosition
