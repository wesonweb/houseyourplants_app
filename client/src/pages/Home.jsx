import { useEffect } from 'react'
import PlantCard from '../components/Plant/PlantCard'
import { usePlantsContext } from '../hooks/usePlantsContext'

const Home = () => {

  const { plants, dispatch } = usePlantsContext()
  useEffect( () => {
    const fetchPlants = async () => {
      try {
          const response = await fetch('http://localhost:4000/api/plants/')
          const data = await response.json()
          dispatch({ type: 'GET_PLANTS', payload: data })
        }

      catch (error) {
        console.error(error)
      }
    }

    fetchPlants()

  }, [dispatch])


  return (
    <>
      <article className="plants">
        <h1 className="text-4xl">Houseyourplants</h1>
        <p>Find the plant that is perfect for your home</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plants && plants.map(plant => (
              <PlantCard
              key={plant._id}
              plant={plant}
              />
            ))
          }
          </div>
      </article>
    </>
  )
}

export default Home
