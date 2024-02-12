import { useState } from "react"
import { MdCloudUpload } from "react-icons/md"
import { MdOutlineCheckCircle } from "react-icons/md"
import PropTypes from 'prop-types'
const PlantImage = ({
    url,
    plantImageError,
    handleImageUpload,
    newImageUploaded,
    plantImageDataFile,
    setPlantImageDataFile,
    showUploadButton,
    setShowUploadButton
}) => {

const [showSavedImage, setShowSavedImage] = useState(true)

const handleImageRemoval = (e) => {
    e.preventDefault()
    setShowUploadButton(false)
    setShowSavedImage(false)
    setPlantImageDataFile(null)
}
    return (
        <div className="my-6">
        <label
            htmlFor="image"
            className="block text-sm font-medium leading-6 text-gray-900">
            Update the plant image
        </label>
        {!showSavedImage && !plantImageDataFile && (
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
            <div className="max-w-5">
                <div>
                    { showSavedImage &&
                        (
                        <img src={url} alt="plant" className="mt-4 block relative object-cover w-52 h-52" />
                        )
                        }
                        {newImageUploaded && (
                            <div className="mt-4">
                                {plantImageDataFile &&  (
                                    <div>
                                        <img
                                            src={plantImageDataFile}
                                            alt="image of house plant"
                                            className="object-cover w-52 h-52"
                                        />
                                        <div className="flex items-center mt-4">
                                            <MdOutlineCheckCircle
                                                size={24}
                                                className="text-green-500"
                                            />
                                            <p className="mb-0 ms-2">
                                                Image uploaded - remember to save your changes
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {showUploadButton && (
                            <button
                                className="flex items-center bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 mt-4 border border-green-500 hover:border-transparent rounded"
                                onClick={handleImageRemoval}>
                                <MdCloudUpload
                                    className="me-2"
                                    size={24}
                                />
                                replace this image
                            </button>
                        )}
                </div>
            </div>

        {plantImageError && (
            <p className="text-red-700 text-s text-center italic mt-2">
                {plantImageError}
            </p>
        )}
    </div>
    )
}
PlantImage.propTypes = {
    url: PropTypes.string,
    plantImageDataFile: PropTypes.string,
    setPlantImageDataFile: PropTypes.func,
    showUploadButton: PropTypes.bool,
    setShowUploadButton: PropTypes.func,
    plantImageError: PropTypes.string.isRequired,
    handleImageUpload: PropTypes.func.isRequired,
    newImageUploaded: PropTypes.bool.isRequired
}

export default PlantImage
