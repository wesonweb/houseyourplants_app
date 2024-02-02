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
          { plants && (
            <p className="mt-3 mb-3">There are {plants.length} plants in the database</p>
          )}
          {plants && plants.map(plant => (
              <PlantCard
              key={plant._id}
              plant={plant}
              />
            ))
          }
      </article>
    </>
  )
}

export default Home
