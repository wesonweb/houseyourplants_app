import { useForm } from 'react-hook-form'
import PlantDescription from '../components/CreatePlantForm/PlantDescription'
import PlantImage from '../components/CreatePlantForm/PlantImage'
import PlantFlowersOrToxic from '../components/CreatePlantForm/PlantFlowersOrToxic'
import PlantCareLevel from '../components/CreatePlantForm/PlantCareLevel'
import PlantPosition from '../components/CreatePlantForm/PlantPosition'
import PlantLighting from '../components/CreatePlantForm/PlantLighting'
import PlantFeedingAndWatering from '../components/CreatePlantForm/PlantFeedingAndWatering'
import PlantHumidity from '../components/CreatePlantForm/PlantHumidity'
import PlantProblems from '../components/CreatePlantForm/PlantProblems'

const CreatePlant = () => {

  const { register, handleSubmit, formState: {errors} } = useForm()


  const onSubmit = (data) => {
    console.log(data); // TODO create the API call that will send the data to the backend and create a new plant
  }

  // store Tailwind classes in variables to make JSX leaner and easier to update
  const formLabelDefaultStyle = "block text-gray-700 text-sm font-bold mb-2"
  const textInputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
  const errorMessageStyle = "text-red-700 text-s italic mt-1"

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
          formLabelDefaultStyle={formLabelDefaultStyle}
          textInputStyle={textInputStyle}
          errorMessageStyle={errorMessageStyle}
          errors={errors}
        />
        <PlantImage
          register={register}
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
        <PlantHumidity
          register={register}
          textInputStyle={textInputStyle}
          errorMessageStyle={errorMessageStyle}
          errors={errors}
        />
        <PlantProblems
          register={register}
          textInputStyle={textInputStyle}
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold mt-4 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        >
          Create plant
        </button>
      </form>
    </>
  )
}

export default CreatePlant
