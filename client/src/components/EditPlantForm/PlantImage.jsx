import PropTypes from 'prop-types'
const PlantImage = ({ plantImage, plantImageError, handleImageUpload }) => {
  return (
    <div className="my-6 bg-yellow-50">
      <label
        htmlFor="image"
        className="block text-sm font-medium leading-6 text-gray-900">
        Upload an image of the plant
      </label>
      {!plantImage && (
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
                onChange={handleImageUpload}
                type="file"
                accept="image/*"
                className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 5MB</p>
          </div>
        </div>
        )}
          {plantImage && (
            <img src={plantImage} alt="plant" className="mt-4" />
          )}
          {plantImageError && ( <p className="text-red-700 text-s text-center italic mt-2">{plantImageError}</p>)}
      </div>
  )
}
PlantImage.propTypes = {
  plantImage: PropTypes.string.isRequired,
  plantImageError: PropTypes.string.isRequired,
  handleImageUpload: PropTypes.func.isRequired
}

export default PlantImage
