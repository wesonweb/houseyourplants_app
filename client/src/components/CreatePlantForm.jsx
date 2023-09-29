import PropTypes from 'prop-types'

const CreatePlantForm = ({

  handleSubmit, onSubmit, register, formLabelStandardStyle  }) => {
  return (
    <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 w-full max-w-lg m-auto"
        onSubmit={handleSubmit(onSubmit)}
        >

        <div className="mb-4">
          <label
            className={formLabelStandardStyle}
            htmlFor="commonName">
            Plant common name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="description"
            type="textarea"
            {...register('description', {required: 'You must provide a description of the plant'})}
            rows={8}
            placeholder="Describe the plant and how to care for it"
          />
        </div>

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
            <label htmlFor="flowers" className="font-medium text-gray-900">
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
              Is it toxic?
            </label>
            <p className="text-gray-500">Check this box if the plant is toxic to humans or animals</p>
          </div>
        </div>
        <div className="my-8">
          <label
            htmlFor="careLevel"
            className={formLabelStandardStyle}
            >Is the plant easy or hard to care for?</label>
          <select
            {...register("careLevel")}
            id="careLevel"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600  sm:leading-6"
            >
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
        </div>
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
                    <label htmlFor="floor" className="font-medium text-gray-900">
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
                    <label htmlFor="table" className="font-medium text-gray-900">
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
                    <label htmlFor="hanging" className="font-medium text-gray-900">
                      Hanging
                    </label>
                    <p className="text-gray-500">This plant trails and would do well positioned hanging</p>
                  </div>
                </div>
              </div>
            </fieldset>
        </div>

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
                    <label htmlFor="floor" className="font-medium text-gray-900">
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
                    <label htmlFor="medium" className="font-medium text-gray-900">
                      Medium light
                    </label>
                    <p className="text-gray-500">This plant can cope with medium lighting conditions.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="high"
                      {...register("lighting")}
                      value="high"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="hanging" className="font-medium text-gray-900">
                      Direct light
                    </label>
                    <p className="text-gray-500">This plant can survive in direct light</p>
                  </div>
                </div>
              </div>
            </fieldset>

        </div>

        <div className="my-6">
          <h2 className="text-xl">Feeding and watering this plant</h2>

          <label htmlFor="watering" className="block text-sm font-medium leading-6 text-gray-900">
              Watering
          </label>
          <div className="mt-2">
            <textarea
              id="watering"
              {...register("watering")}
              rows={5}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
              placeholder="eg water when the soil is dry to the touch"
              defaultValue={''}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Enter the watering instructions for this plant.</p>


          <div className="my-6">
          <label htmlFor="feeding" className="block text-sm font-medium leading-6 text-gray-900">
              Feeding
          </label>
            <textarea
              id="feeding"
              {...register("feeding")}
              rows={5}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:leading-6"
              placeholder="eg feed every 2 weeks in spring and summer"
              defaultValue={''}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Enter instructions for feeding this plant.</p>
          </div>


        <div className="my-6">
          <h2 className="text-xl">Humidity</h2>
          <label htmlFor="humidity" className="block text-sm font-medium leading-6 text-gray-900">
              Enter humidity requirements
          </label>
          <div className="mt-2">
                <textarea
                  id="humidity"
                  {...register("humidity")}
                  rows={5}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600  sm:leading-6"
                  placeholder="eg mist regularly"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Enter the humidity requirements for this plant.</p>
        </div>


        <div className="my-6">
          <h2 className="text-xl">Problems with this plant</h2>
          <label htmlFor="problems" className="block text-sm font-medium leading-6 text-gray-900">
              Issues that are common to this plant
          </label>
          <div className="mt-2">
                <textarea
                  id="problems"
                  {...register("problems")}
                  rows={5}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600  sm:leading-6"
                  placeholder="eg prone to spider mites"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Enter any problems common to this plant.</p>
        </div>

        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold mt-4 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">Create plant</button>
      </form>
  )
}
CreatePlantForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  formLabelStandardStyle: PropTypes.string.isRequired,
}

export default CreatePlantForm
