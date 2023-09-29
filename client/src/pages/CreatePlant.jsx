import { useForm } from 'react-hook-form'
import CreatePlantForm from '../components/CreatePlantForm'

const CreatePlant = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data); // TODO create the API call that will send the data to the backend and create a new plant
  }

  const formLabelStandardStyle = "block text-gray-700 text-sm font-bold mb-2"

  return (
    <>
      <h1 className="text-center text-4xl mt-4">Create a plant</h1>

      <CreatePlantForm
        register={register}
        handleSubmit={handleSubmit}
        formLabelStandardStyle={formLabelStandardStyle}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default CreatePlant
