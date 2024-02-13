import { useForm, useFieldArray } from 'react-hook-form'
import { useState } from 'react'
import { usePlantsContext } from '../hooks/usePlantsContext'
import { useNavigate } from 'react-router-dom'
import PlantDescription from '../components/CreatePlantForm/PlantDescription'
import PlantImage from '../components/CreatePlantForm/PlantImage'
import PlantFlowersOrToxic from '../components/CreatePlantForm/PlantFlowersOrToxic'
import PlantCareLevel from '../components/CreatePlantForm/PlantCareLevel'
import PlantPosition from '../components/CreatePlantForm/PlantPosition'
import PlantLighting from '../components/CreatePlantForm/PlantLighting'
import PlantFeedingAndWatering from '../components/CreatePlantForm/PlantFeedingAndWatering'
import PlantHumidityAndTemperature from '../components/CreatePlantForm/PlantHumidityAndTemperature'
import PlantProblems from '../components/CreatePlantForm/PlantProblems'

import { toast } from 'react-toastify'

const CreatePlant = () => {
    const navigate = useNavigate()
    const [plantImage, setPlantImage] = useState('') // useState hook to manage image state instead of React Hook Form
    const [plantImageError, setPlantImageError] = useState('') // useState hook to manage image error state instead of React Hook Form
    const { plants, dispatch } = usePlantsContext()
    const {
            register,
            handleSubmit,
            control,
            formState: {errors, isSubmitting}
        } = useForm()
    const { fields, append, remove } = useFieldArray({
            name: 'problems',
            control,
        })
    const handleImageUpload = (e) => {
    const file = e.target.files[0] // get the first image file in the array
    if (file.length === 0) {
        return
    } else {
        transformImageToBase64(file) // transform the image file into a base64 string
        }
    }
    const transformImageToBase64 = (file) => {
        const reader = new FileReader()
        if (file !== '') {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
            setPlantImage(reader.result) // use the setter function to update the state with the image base64 string
            }
        } else {
            console.error('no file was provided');
            return
        }
    }
    const onSubmit = async (data) => {
        if (!plantImage) {
            const plantImageError = 'You must provide an image'
            setPlantImageError(plantImageError)
            console.error(plantImageError)
        return
        }
        const plantData = {
            ...data, // spread the data object into a new object
            image: plantImage.trim() // assign the base64 string to the image property of the object
        }
        const submitPlantData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/plants/new-plant', {
                    method: 'POST',
                    body: JSON.stringify(plantData),
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                console.log('plant data:', data)
                if (!response.ok) {
                    throw new Error('Something went wrong. Please check your server logs')
                }
            } catch (error) {
            console.log(error)
            }
        }
        await submitPlantData() // submit the data to the server
            setPlantImage('') // reset the image state
            dispatch({ type: 'CREATE_PLANT', payload: plantData }) // update the state with the new plant data
            toast('Plant created successfully', { type: 'success', autoClose: 3000 })
            navigate('/') // navigate to the home page after the plant has been created
    }

  // store Tailwind classes in variables to make JSX leaner and easier to update
  // TODO: look at customising Tailwind classes
    const formLabelDefaultStyle = "block text-gray-700 text-sm font-bold mb-2"
    const textInputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
    const errorMessageStyle = "text-red-700 text-s italic mt-1"
    const btnPrimary="bg-green-600 hover:bg-green-700 text-white font-bold mt-4 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:opacity-35"
    const btnSecondary="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
    return (
        <>
            <h1 className="text-center text-4xl mt-4">Create a plant</h1>
            <p className="text-center mt-3">There are currently <strong>{plants && plants.length}</strong> plants in the database</p>
            <form
                noValidate // prevent default browser validation
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 w-full max-w-xlg m-auto"
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
                    plantImageError={plantImageError}
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
                    {isSubmitting &&
                        <div className="inline-block h-4 w-4 me-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Saving...
                            </span>
                        </div>
                    }
                    Create plant
                </button>
            </form>
        </>
    )
}

export default CreatePlant
