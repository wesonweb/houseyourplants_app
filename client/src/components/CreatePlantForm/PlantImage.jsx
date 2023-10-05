import PropTypes from 'prop-types'
const PlantImage = ({ register }) => {
  return (
    <div className="my-6">
      <label
        htmlFor="image"
        className="block text-sm font-medium leading-6 text-gray-900">
        Image of the plant
      </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="image"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-green-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
              >
              <span>Upload an image</span>
              <input
                id="image"
                {...register("image")}
                type="file"
                className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 5MB</p>
          </div>
        </div>
      </div>
  )
}
PlantImage.propTypes = {
  register: PropTypes.func.isRequired,
}

export default PlantImage
