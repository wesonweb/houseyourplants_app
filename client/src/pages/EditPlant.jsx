import { useForm, useFieldArray } from 'react-hook-form'
import { useState, useEffect } from 'react'
// import { usePlantsContext } from '../hooks/usePlantsContext'
import { useNavigate, Link, useParams } from 'react-router-dom'
import PlantDescription from '../components/CreatePlantForm/PlantDescription'
import PlantImage from '../components/EditPlantForm/PlantImage'
import PlantFlowersOrToxic from '../components/CreatePlantForm/PlantFlowersOrToxic'
import PlantCareLevel from '../components/CreatePlantForm/PlantCareLevel'
import PlantPosition from '../components/CreatePlantForm/PlantPosition'
import PlantLighting from '../components/CreatePlantForm/PlantLighting'
import PlantFeedingAndWatering from '../components/CreatePlantForm/PlantFeedingAndWatering'
import PlantHumidityAndTemperature from '../components/CreatePlantForm/PlantHumidityAndTemperature'
import PlantProblems from '../components/CreatePlantForm/PlantProblems'
import Button from '../components/Button/Button'

import { useAuthContext } from '../hooks/useAuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdCheck } from "react-icons/md"
import { ImCancelCircle } from "react-icons/im"

const EditPlant = () => {
const [plant, setPlant] = useState({})
const [newImageUploaded, setNewImageUploaded] = useState(false)

const [plantImage, setPlantImage] = useState('') // useState hook to manage image state instead of React Hook Form
const [plantImageError, setPlantImageError] = useState('')

const [plantImageDataFile, setPlantImageDataFile] = useState('')
const [showUploadButton, setShowUploadButton] = useState(true)

const navigate = useNavigate()
const { id } = useParams()
const { user } = useAuthContext()

let url = plant && plant?.image?.url || ''

const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {errors, isSubmitting}
} = useForm()

const { fields, append, remove } = useFieldArray({
    name: 'problems',
    control,
})

useEffect(() => {
const fetchPlant = async () => {
    if (!user) {
        return
    }
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/plants/${id}`)
        const plant = await response.json()
    if(response.ok) {
        setPlant(plant)
        }
    }
    catch (error) {
    console.error(error)
    }
}
fetchPlant()
}, [id, user])

useEffect(() => {
if (plant) {
    reset(plant)
    setPlantImage(plant.image)
}
}, [plant, reset])

// useState hook to manage image error state instead of React Hook Form

// const { plants, dispatch } = usePlantsContext()

const handleImageUpload = (e) => {
const file = e.target.files[0] // get the first image file in the array
    if (file.length === 0) {
        console.error('no file was provided')
        return
    } else {
        transformImageToBase64(file)
        setNewImageUploaded(true)// transform the image file into a base64 string
        setShowUploadButton(true)
    }
}


const transformImageToBase64 = (file) => {
const reader = new FileReader()
    if (file !== '') {
        reader.readAsDataURL(file)
        reader.onloadend = () => {
        setPlantImage(reader.result) // use the setter function to update the state with the image base64 string
        setPlantImageDataFile(reader.result)
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
        image: plantImage
    }

    const submitUpdatedPlantData = async () => {

        try {
        const response = await toast.promise (
            fetch(`${import.meta.env.VITE_BASE_URL}/api/plants/edit/${id}`, {
				method: 'PATCH',
				body: JSON.stringify(plantData),
				headers: {
                'Authorization': `Bearer ${user?.token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				}
			}),
            {
                pending: 'Updating plant...',
                success: 'Plant updated successfully',
                // error: 'Something went wrong updating the plant. Please check your server logs'
                error: 'Something went wrong updating the plant. Please check your server logs'
            }
        )
        if (!response.ok) {
            // toast.error('Something went wrong updating the plant. Please check your server logs')
            throw new Error('Something went wrong fetching a plant. Please check your server logs')
            }
        } catch (error) {
            console.log(error)
        }
    }
    await submitUpdatedPlantData() // submit the data to the server
    navigate(`/plants/${id}`) // navigate to the plant page after the edits have been submitted

}

// store Tailwind classes in variables to make JSX leaner and easier to update
// TODO: look at customising Tailwind classes
const formLabelDefaultStyle = "block text-gray-700 text-sm font-bold mb-2"
const textInputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
const errorMessageStyle = "text-red-700 text-s italic mt-1"
    return (
        <article className="container mx-auto">
            <h1 className="text-center text-4xl mt-4">Edit {plant?.commonName}</h1>
            <p className="text-center">{plant?.scientificName}</p>
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
                url={url}
                handleImageUpload={handleImageUpload}
                plantImageError={plantImageError}
                newImageUploaded={newImageUploaded}
                plantImageDataFile={plantImageDataFile}
                setPlantImageDataFile={setPlantImageDataFile}
                showUploadButton={showUploadButton}
                setShowUploadButton={setShowUploadButton}
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
                // btnSecondary={btnSecondary}
            />
            <Link
                to={`/plants/${id}`}
                className="inline-block bg-gray-500 hover:bg-gray-600 shadow text-white font-bold py-2 px-4 mt-4 me-2 rounded"
            >
                <div className="flex items-center">
                <ImCancelCircle className="me-2"/>
                Cancel
                </div>
            </Link>
            <Button
                primary
                disabled={isSubmitting} // disable the button when the form is submitting
                type="submit"
            >
                <div className="flex items-center">
                    <MdCheck className="me-2"/>
                    Save changes
                </div>
            </Button>

            </form>
        </article>
    )
}

export default EditPlant
