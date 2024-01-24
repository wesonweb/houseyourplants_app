import { useRef } from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

const PlantDescription = ({
    register,
    control,
    formLabelDefaultStyle,
    textInputStyle,
    errorMessageStyle,
    errors
  }) => {
    const MCE_API_KEY = import.meta.env.VITE_TINYMCE_API_KEY
    const editorRef = useRef(null)
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

          <Controller
            name="description"
            control={control}
            rules={{ required: 'You must provide a plant description' }}
            render={({ field: { value, onChange } }) => (
              <Editor
                id="description"
                apiKey={MCE_API_KEY}
                onInit={(evt, editor) => editorRef.current = editor}
                value={value}
                onEditorChange={onChange}
                // initialValue="Add your plant description..."
                init={{
                  branding: false,
                  height: 500,
                  menubar: true,
                  placeholder: 'Add your plant description...',
                }}
              />
            )}
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
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

export default PlantDescription
