import PropTypes from 'prop-types'

const PlantProblems = ({
  register,
  errors,
  errorMessageStyle,
  textInputStyle,
  fields,
  append,
  remove,
  btnSecondary
}) => {
  return (
    <div className="my-6">
        <h2 className="text-xl">Problems with this plant</h2>
        <label
          className="block text-sm font-medium leading-6 text-gray-900">
            Issues that are common to this plant
        </label>
        <div className="mt-2">
          {
            fields.map((field, index) => {
              return(
                <div key={field.id}>
                  <div  className="flex mb-4">
                    <textarea
                      {...register(`problems.${index}.problem`, {required: 'this field cannot be empty. Enter a problem or remove this field'})}
                      rows={5}
                      className={textInputStyle}
                      placeholder="eg prone to spider mites"
                    />
                    <button type="button" className="ms-3" onClick={() => remove(index)}>Delete</button>
                  </div>
                    {errors.problems && errors.problems[index] && <p className={errorMessageStyle}>{errors.problems[index].problem.message}</p>}
                </div>
              )
            })
          }
          <button type="button" className={btnSecondary} onClick={() => append()}>Add a problem</button>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">Enter any problems common to this plant.</p>
    </div>
  )
}

PlantProblems.propTypes = {
  register: PropTypes.func.isRequired,
  textInputStyle: PropTypes.string.isRequired,
  errorMessageStyle: PropTypes.string.isRequired,
  btnSecondary: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  append: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default PlantProblems
