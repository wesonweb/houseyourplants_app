import { useForm, useFieldArray } from 'react-hook-form'
import { useState } from 'react'
import PlantDescription from '../components/CreatePlantForm/PlantDescription'
import PlantImage from '../components/CreatePlantForm/PlantImage'
import PlantFlowersOrToxic from '../components/CreatePlantForm/PlantFlowersOrToxic'
import PlantCareLevel from '../components/CreatePlantForm/PlantCareLevel'
import PlantPosition from '../components/CreatePlantForm/PlantPosition'
import PlantLighting from '../components/CreatePlantForm/PlantLighting'
import PlantFeedingAndWatering from '../components/CreatePlantForm/PlantFeedingAndWatering'
import PlantHumidityAndTemperature from '../components/CreatePlantForm/PlantHumidityAndTemperature'
import PlantProblems from '../components/CreatePlantForm/PlantProblems'

const CreatePlant = () => {

  const [plantImage, setPlantImage] = useState('') // useState hook to manage image state instead of React Hook Form

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors, isSubmitting}
  } = useForm()

  const { fields, append, remove } = useFieldArray({
    name: 'problems',
    control,
    // defaultValues: [{}],
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0] // get the first image file in the array
    transformImageToBase64(file) // transform the image file into a base64 string
  }

  const transformImageToBase64 = (file) => {
      const reader = new FileReader()
      if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPlantImage(reader.result) // use the setter function to update the state with the image base64 string
        }
      } else {
        setPlantImage('') // if no file was provided, set the state to an empty string
      }
    }


  const onSubmit = (data) => {
    const plantData = {
      ...data, // spread the data object into a new object
      image: plantImage // assign the base64 string to the image property of the object
    }

    const submitPlantData = async () => {

      try {
        const response = await fetch('http://localhost:4000/api/plants/new-plant', {
          method: 'POST',
          body: JSON.stringify(plantData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log('data', data)
        if (!response.ok) {
          throw new Error('Something went wrong. Please check your server logs')
        }
      } catch (error) {
        console.log(error)
      }
    }

    submitPlantData() // submit the data to the server

    setPlantImage('') // reset the image state
    reset() // reset the form
  }

  // store Tailwind classes in variables to make JSX leaner and easier to update
  const formLabelDefaultStyle = "block text-gray-700 text-sm font-bold mb-2"
  const textInputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
  const errorMessageStyle = "text-red-700 text-s italic mt-1"
  const btnPrimary="bg-green-600 hover:bg-green-700 text-white font-bold mt-4 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
  const btnSecondary="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
  return (
    <>
      <h1 className="text-center text-4xl mt-4">Create a plant</h1>
      <form
        noValidate // prevent default browser validation
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 w-full max-w-lg m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PlantDescription
          register={register}
          control={control}
          formLabelDefaultStyle={formLabelDefaultStyle}
          textInputStyle={textInputStyle}
          errorMessageStyle={errorMessageStyle}
          errors={errors}
        />
        <PlantImage
          plantImage={plantImage}
          handleImageUpload={handleImageUpload}
        />
        <PlantFlowersOrToxic
          register={register}
        />
        <PlantCareLevel
          register={register}
          formLabelDefaultStyle={formLabelDefaultStyle}
          errors={errors}
          errorMessageStyle={errorMessageStyle}
        />
        <PlantPosition
          register={register}
        />
        <PlantLighting
          register={register}
        />
        <PlantFeedingAndWatering
          register={register}
          textInputStyle={textInputStyle}
          errorMessageStyle={errorMessageStyle}
          errors={errors}
        />
        <PlantHumidityAndTemperature
          register={register}
          formLabelDefaultStyle={formLabelDefaultStyle}
          textInputStyle={textInputStyle}
          errorMessageStyle={errorMessageStyle}
          errors={errors}
        />
        <PlantProblems
          register={register}
          errors={errors}
          textInputStyle={textInputStyle}
          errorMessageStyle={errorMessageStyle}
          fields={fields}
          append={append}
          remove={remove}
          btnSecondary={btnSecondary}
        />

        <button
          disabled={isSubmitting} // disable the button when the form is submitting
          type="submit"
          className={btnPrimary}
        >
          Create plant
        </button>
      </form>
    </>
  )
}

export default CreatePlant
