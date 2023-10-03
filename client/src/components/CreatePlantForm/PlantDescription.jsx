import PropTypes from 'prop-types'
const PlantDescription = ({ register, formLabelStandardStyle, textInputStyle }) => {
  return (
    <>
      <div className="mb-4">
          <label
            className={formLabelStandardStyle}
            htmlFor="commonName">
            Plant common name
          </label>
          <input
            className={textInputStyle}
            id="commonName"
            type="text"
            {...register('commonName', { required: 'You must provide the plants common name' })}
            placeholder="eg Spider Plant"
          />
        </div>

        <div className="mb-4">
          <label
            className={formLabelStandardStyle}
            htmlFor="scientificName">
            Plant botanical name
          </label>
          <input
            className={textInputStyle}
            id="scientificName"
            type="text"
            {...register('scientificName', { required: 'You must provide the plants botanical name' })}
            placeholder="eg Chlorophytum comosum "
          />
        </div>

        <div className="my-6">
          <label
            className={formLabelStandardStyle}
            htmlFor="description">
            Enter the plant description
          </label>
          <textarea
            className={textInputStyle}
            id="description"
            type="textarea"
            {...register('description', {required: 'You must provide a description of the plant'})}
            rows={8}
            placeholder="Describe the plant and how to care for it"
          />
        </div>
      </>
  )
}

PlantDescription.propTypes = {
  register: PropTypes.func.isRequired,
  formLabelStandardStyle: PropTypes.string.isRequired,
  textInputStyle: PropTypes.string.isRequired
}

export default PlantDescription
