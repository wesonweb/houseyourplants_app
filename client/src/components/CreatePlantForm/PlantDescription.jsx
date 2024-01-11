import { useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor } from '@tinymce/tinymce-react'

const PlantDescription = ({
    register,
    formLabelDefaultStyle,
    textInputStyle,
    errorMessageStyle,
    errors
  }) => {
    const MCE_API_KEY = import.meta.env.VITE_TINYMCE_API_KEY
    console.log(MCE_API_KEY)
    const editorRef = useRef(null)
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent())
      }
    }
  return (
    <>
      <div className="mb-4">
          <label
            className={formLabelDefaultStyle}
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
          <p className={errorMessageStyle}>{errors.commonName?.message}</p>
        </div>

        <div className="mb-4">
          <label
            className={formLabelDefaultStyle}
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
          <p className={errorMessageStyle}>{errors.scientificName?.message}</p>
        </div>

        <div className="my-6">
          <label
            className={formLabelDefaultStyle}
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

          <Editor
            apiKey={MCE_API_KEY}

          />

          <p className={errorMessageStyle}>{errors.description?.message}</p>
        </div>
      </>
  )
}

PlantDescription.propTypes = {
  register: PropTypes.func.isRequired,
  formLabelDefaultStyle: PropTypes.string.isRequired,
  textInputStyle: PropTypes.string.isRequired,
  errorMessageStyle: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
}

export default PlantDescription
