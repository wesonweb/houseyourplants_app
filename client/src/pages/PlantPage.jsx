
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import Loader from '../components/Loader/Loader'
import EditDeleteBar from '../components/EditDeleteBar/EditDeleteBar'

import { MdCheckCircle, MdPets } from "react-icons/md"
import { IoMdAlert } from "react-icons/io"
import { LuFlower } from "react-icons/lu"

import { useAuthContext } from '../hooks/useAuthContext'

export default function PlantPage() {

	const [plant, setPlant] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const { id } = useParams()
    const { user } = useAuthContext()
    const isAdmin = user?.role === 'admin' ? true : false

	useEffect(() => {
	const fetchPlant = async () => {
		try {
			const response = await fetch(`http://localhost:4000/api/plants/${id}`)
			const plant = await response.json()
			if(response.ok) {
			setLoading(false)
			setPlant(plant)
			setError(null)
			}
		}
	catch (error) {
		setError(error)
		console.error(error)
		}
	}
	fetchPlant()
	}, [id])

	let navigate = useNavigate()
	const handleDeletePlant = async () => {
		try {
		const response = await fetch(`http://localhost:4000/api/plants/${id}`, {
			method: 'DELETE',
			headers: {
            'Authorization': `Bearer ${user?.token}`,
			'Content-Type': 'application/json'
			}
		})
		const data = await response.json()
			if(response.ok) {
			console.log(data)
			navigate('/')
		}
	}
		catch (error) {
		console.error(error)
		}
	}

	const { commonName, scientificName, careLevel, description, watering, feeding, humidity, temperature, toxicity, flowers, image  } = plant || {}

  // parse the description to render the html tags added by TinyMCE
	const parsedDescription = parse(`${description}`)

	const lighting = plant && plant.lighting
	const position = plant && plant.position
	const problems = plant && plant.problems
	const imageURL = image && image.url
    console.log(plant);
    const hard = careLevel === 'hard'
    const safe = !toxicity


	return (
		<div className="bg-white container mx-auto p-4">
			{loading && <Loader />}
            {isAdmin && <EditDeleteBar handleDeletePlant={handleDeletePlant} id={id}/> }
			{ error && <p>There was an error: {error.message}</p> }
			{loading && (
				<p>Loading...</p>
			)}
			{plant && !error && (
			<article>
				<h1 className="text-4xl tracking-wide mb-0">{commonName}</h1>
				<p><em>{scientificName}</em></p>
				<p>This plant is <span className="text-lg">{careLevel}</span> to look after</p>
				<p className="break-words">Image url: {imageURL}</p>
				<h2 className="text-xl">Description</h2>
				{parsedDescription}
				<h2 className="text-xl">Watering instructions</h2>
				<p>{watering}</p>
				<h2 className="text-xl">Feeding instructions</h2>
				<p>{feeding}</p>
				<h2 className="text-xl">Humidity instructions</h2>
				<p>{humidity}</p>
				<h2 className="text-xl">Ideal temperature range</h2>
				<p>{temperature} &#8451;</p>
				<h2 className="text-xl">Lighting</h2>
				<div>{lighting?.map(light => (
					<p key={light}>{light}</p>
					))}
				</div>
				<h2 className="text-xl">Position</h2>
				<div>{position?.map(p => (
					<p key={p}>{p}</p>
					))}
				</div>
				<h2 className="text-xl">Problems</h2>
				<div>{problems?.map(issue => (
					<p key={issue.problem}>{issue.problem}</p>
					))}
				</div>
				<h2 className="text-xl">Toxicity</h2>
				<p>{toxicity
					? <span className="text-red-500">This plant is poisonous to pets</span>
					: <span className="text-green-500">This plant is safe for pets</span>
					}
				</p>
				<h2 className="text-xl">Flowers</h2>
				<p>{flowers
					? <span className="text-green-500">This plant flowers</span>
					: <span className="text-red-500">This plant does not flower</span>
					}
				</p>


                <div className="mb-1 ms-1 text-sm flex gap-2 absolute bottom-0">
                <span className={`${hard ? 'bg-orange-600' : 'bg-green-600'} rounded px-3 py-0.5  items-center text-white w-auto inline-block`}>
                    <div className="flex items-center">
                        {hard
                            ? <IoMdAlert className="me-1" />
                            : <MdCheckCircle className="me-1" />
                        }

                        <span>{careLevel}</span>
                    </div>
                </span>
                {safe && (
                    <span className={`bg-violet-600 rounded px-3 py-0.5  items-center text-white w-auto inline-block`}>
                        <div className="flex items-center">
                            {safe
                                ? <MdPets className="me-1" />
                                : null
                            }

                            <span>pet friendly</span>
                        </div>
                    </span>
                )}
                {flowers && (
                    <span className={`bg-rose-600 rounded px-3 py-0.5  items-center text-white w-auto inline-block`}>
                        <div className="flex items-center">
                            {flowers
                                ? <LuFlower className="me-1" />
                                : null
                            }

                            <span>flowers</span>
                        </div>
                    </span>
                )}
            </div>
			</article>
		)}
	</div>
	)
}
