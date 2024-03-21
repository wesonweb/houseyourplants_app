
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import Loader from '../components/Loader/Loader'
import './PlantPage.css'
import EditDeleteBar from '../components/EditDeleteBar/EditDeleteBar'
import PlantNavigation from '../components/PlantNavigation/PlantNavigation'

import { BsHouseHeartFill } from "react-icons/bs"
import { FaTemperatureLow } from "react-icons/fa"
import { IoMdAlert } from "react-icons/io"
import { LiaWineBottleSolid } from "react-icons/lia";
import { LuFlower } from "react-icons/lu"
import { MdCheckCircle, MdPets, MdReportProblem, MdOutlineWbSunny, MdWaves } from "react-icons/md"
import { WiRaindrop } from "react-icons/wi"

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
			const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/plants/${id}`)
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
		const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/plants/${id}`, {
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

	const lighting = plant?.lighting
	const position = plant?.position
	const problems = plant?.problems
	const imageURL = image && image.url
    const careLevelHard = careLevel === 'hard'
    const isToxic = toxicity === true

	return (
        <>
            <Helmet>
                <title>houseyourplants</title>
                <meta
                    name="description"
                    content="houseyourplants - single plant page"
                />
            </Helmet>
            <div className="container bg-sky-50 rounded md:shadow-md md:m-5 xlg:w-9/12 md:mx-auto p-4">
                {loading && <Loader />}
                {isAdmin && <EditDeleteBar handleDeletePlant={handleDeletePlant} id={id}/> }
                {error && <p>There was an error: {error.message}</p> }
                {plant && !error && (
                <article>
                    <section className="mx-auto md:w-6/12 md:pt-6 xl:w-5/12">
                        <h1 className="text-3xl tracking-wide mb-0 md:text-5xl">{commonName}</h1>
                        <p><em className="md:text-lg text-slate-600 tracking-wide">{scientificName}</em></p>
                        <img src={imageURL} alt={commonName} className="mx-auto my-4 md:my-8 object-cover w-full" />
                    </section>

                    <div className="my-6 ms-1 text-sm flex flex-wrap gap-2 md:justify-center md:w-8/12 md:mx-auto md:my-12 xl:w-5/12">
                        <div className={`${careLevelHard ? 'text-amber-700' : 'text-teal-600'} border shadow rounded px-4 py-2 items-center w-auto inline-block`}>
                            <div className="flex items-center">
                                {careLevelHard
                                    ? <IoMdAlert size={22} className="me-2 text-amber-800" />
                                    : <MdCheckCircle size={22} className="me-2 text-teal-600" />
                                }
                                <span className="text-lg">{careLevel} to care for</span>
                            </div>
                        </div>
                        <div className={`border shadow rounded px-4 py-2 items-center text-red-800 w-auto inline-block`}>
                            <div className="flex items-center">
                                {isToxic
                                    ? <MdReportProblem size={22} className="me-3 text-red-600"/>
                                    : <MdPets size={22} className="me-2 text-violet-600" />
                                }
                                {isToxic
                                    ? <span className="text-lg text-red-600">not pet friendly</span>
                                    : <span className="text-lg text-violet-600">pet friendly</span>
                                }
                            </div>
                        </div>
                        <div className={`border shadow rounded px-4 py-2 items-center text-orange-600 w-auto inline-block`}>
                            <div className="flex items-center">
                                <FaTemperatureLow size={22} className="me-2" />
                                <span className="text-lg">{temperature} &#8451;</span>
                            </div>
                        </div>
                        {flowers && (
                        <div className={`rounded px-4 py-2 border shadow items-center text-rose-600 w-auto inline-block`}>
                            <div className="flex items-center">
                                {flowers
                                    ? <LuFlower size={22} className="me-2" />
                                    : null
                                }

                                <span className="text-lg">flowers</span>
                            </div>
                        </div>

                    )}
                        {/* <div className={`bg-yellow-500  rounded px-5 py-2 items-center text-white w-auto inline-block`}> */}
                        <div className={` shadow border rounded px-4 py-2 items-center text-yellow-700 w-auto inline-block`}>
                            <div className="flex items-center">
                                <MdOutlineWbSunny size={24} className="me-2 text-yellow-500" />
                                <div className="flex flex-wrap items-center">
                                    <span className="text-lg me-2">light: </span>
                                    <div className="flex">{lighting?.map(light => (
                                        <p
                                            key={light}
                                            className="mb-0 me-2 text-lg">
                                            {light}
                                        </p>
                                        ))}
                                        {/* <span className="text-lg">light</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`rounded px-4 py-2 border shadow items-center text-blue-700 w-auto inline-block`}>
                            <div className="flex items-center">
                                <BsHouseHeartFill size={22} className="me-2" />
                                <div className="flex flex-wrap items-center">
                                    <span className="text-lg me-2">position: </span>
                                    <div className="flex">{position?.map(spot => (
                                        <p
                                            key={spot}
                                            className="mb-0 me-2 text-lg">
                                            {spot}
                                        </p>
                                        ))}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="plant__description mx-auto md:text-lg md:py-4 md:w-8/12 lg:w-6/12">
                        {parsedDescription}
                    </section>

                    <div className="gap-3 md:mx-auto md:w-2/3 lg:w-1/2">
                        <section className="mb-6 md:mb-10">
                            <div className="flex items-center my-4">
                                <WiRaindrop size={32} className="text-sky-500 me-2 " />
                                <h2 className="text-xl mb-0 md:text-2xl">Watering</h2>
                            </div>
                            <p className="mb-0 md:text-lg">{watering}</p>
                        </section>
                        <section className="mb-6 md:mb-10">
                            <div className="flex items-center my-4">
                                <LiaWineBottleSolid size={32} className="text-green-700 me-2" />
                                <h2 className="text-xl mb-0 md:text-2xl">Feeding</h2>
                            </div>
                            <p className="md:text-lg">{feeding}</p>
                        </section>
                        <section className="mb-6 md:mb-10">
                            <div className="flex items-center my-4">
                                <MdWaves size={32} className="text-zinc-400 me-2" />
                                <h2 className="text-xl mb-0 md:text-2xl">Humidity</h2>
                            </div>
                            <p className="md:text-lg">{humidity}</p>
                        </section>
                    </div>

                    <section className="my-6 md:my-8 md:mx-auto md:w-8/12 xl:w-6/12">
                        <div className="flex items-center my-4">
                            <IoMdAlert
                                className="text-red-600 me-2"
                                size={28}
                            />
                            <h2 className="text-xl mb-0 md:text-2xl">Issues with the {commonName}</h2>
                        </div>
                        <div>
                            {problems?.map(issue => (
                            <p key={issue.problem} className="md:text-lg mb-8">
                                {issue.problem}
                            </p>
                            ))}
                        </div>
                    </section>

                <PlantNavigation />

                </article>
            )}
        </div>
    </>

	)
}
