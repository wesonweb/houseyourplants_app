import { useEffect, useState } from 'react'
import PlantCard from '../components/PlantCard/PlantCard'
import ToxicityFilter from '../components/ToxicityFilter/ToxicityFilter'
import FlowersFilter from '../components/FlowersFilter/FlowersFilter'
import LightingFilter from '../components/LightingFilter/LightingFilter'
import PositionFilter from '../components/PositionFilter/PositionFilter'
import { usePlantsContext } from '../hooks/usePlantsContext'
import Loader from '../components/Loader/Loader'
import { MdOutlineFilterList } from "react-icons/md"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [filterExpanded, setFilterExpanded] = useState(false)
    const [isNotToxic, setIsNotToxic] = useState(false)
    const [hasFlowers, setHasFlowers] = useState(false)
    const [lightingRequirements, setLightingRequirements] = useState([])
    const [positions, setPositions] = useState([])

    const { plants, dispatch } = usePlantsContext()

    const filterStyling = "flex flex-wrap flex-col gap-3 grow bg-sky-100 p-2 rounded-xl md:flex-row md:items-center lg:p-4"

    useEffect( () => {
    const fetchPlants = async () => {
        try {

            const queryParams = new URLSearchParams()
            if (isNotToxic) {
                queryParams.append('toxicity', 'false')
            }
            if (hasFlowers) {
                queryParams.append('flowers', 'true')
            }
            if (lightingRequirements.length > 0) {

                lightingRequirements.forEach(lighting => {
                    queryParams.append('lighting', lighting)
                })
            }
            if (positions.length > 0) {

                positions.forEach(lighting => {
                    queryParams.append('position', lighting)
                })
            }

            const queryString = queryParams.toString()

            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/plants/?${queryString}`)
            const data = await response.json()
            if(response.ok) {
                setIsLoading(false)
                dispatch({ type: 'GET_PLANTS', payload: data })
                }
            }
        catch (error) {
        console.error(error)
        }
    }
    fetchPlants()

    }, [dispatch, isNotToxic, hasFlowers, lightingRequirements, positions])


    return (
    <>
        <article className="container p-3 mx-auto plants">
            <h1 className="text-4xl">Houseyourplants</h1>
            <p>Find the plant that is perfect for your home</p>
                {isLoading && <Loader />}
            <button
                onClick={() => setFilterExpanded(!filterExpanded)}
                className="shadow-lg  px-4 py-2 mt-4 bg-sky-200 hover:bg-sky-400 active:bg-sky-500 transition-colors duration-300 ease-in-out flex items-center"
            >
                <div className="flex items-center">
                    <MdOutlineFilterList
                        size={20}
                        className="me-2"
                    />
                    <h2 className="text-lg m-0">Filter plants</h2>

                </div>
            </button>
            <div>
                {filterExpanded &&
                    <div className="bg-sky-200 shadow-md p-4 mb-4 flex flex-wrap gap-5 lg:p-6 xl:p-8">
                        <div className={filterStyling}>
                            <ToxicityFilter
                                isNotToxic={isNotToxic}
                                setIsNotToxic={setIsNotToxic}
                            />
                        </div>
                        <div className={filterStyling}>
                            <FlowersFilter
                                setHasFlowers={setHasFlowers}
                            />
                        </div>
                        <div className={filterStyling}>
                            <LightingFilter
                                setLightingRequirements={setLightingRequirements}
                            />
                        </div>
                        <div className={filterStyling}>
                            <PositionFilter
                                setPositions={setPositions}
                            />
                        </div>
                    </div>
                }

                    {plants && plants.length === 0 && !isLoading && (
                        <div>
                            <h2 className="text-2xl pt-4">Sorry, there are no plants matching your requirements.</h2>
                            <p className="text-lg">Try adjusting the filters to view more plants.</p>

                        </div>
                        )
                    }
                    <div className="grid grid-cols-auto-fill-250 gap-5 mt-4 flex-1">
                    {plants && plants.map(plant => (
                        <PlantCard
                        key={plant._id}
                        plant={plant}
                        />
                    ))
                    }
                </div>
            </div>
        </article>
    </>
    )
}

export default Home
