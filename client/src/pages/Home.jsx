import { useEffect, useState } from 'react'
import PlantCard from '../components/Plant/PlantCard'

const Home = () => {
  const [plants, setPlants] = useState([])

  useEffect( () => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/plants/')
        const data = await response.json()
        setPlants(data)
        console.log(data);
      }
      catch (error) {
        console.error(error)
      }
    }

    fetchPlants()

  }, [])

  return (
    <>
      <article className="plants">
        <h1 className="text-4xl">Houseyourplants</h1>
        <p>Find the plant that is perfect for your home</p>
        <p className="mt-3 mb-3">There are {plants.length} plants in the database</p>
        {plants && plants.map(plant => (
          <PlantCard
          key={plant._id}
          plant={plant}
          />
        ))}
      </article>
    </>
  )
}

export default Home
