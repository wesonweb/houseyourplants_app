import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function PlantCard({ plant }) {

  const { commonName, scientificName, flowers, toxicity, _id } = plant
  return (
    <article className="container mt-4 p-4">
      <Link to={`/plants/${_id}`}>
      <h1 className="text-2xl mb-2">{commonName}</h1>
      <span><em>{scientificName}</em></span>
      <p>{flowers && (
        <span className="text-green-500">This plant flowers</span>
      )}</p>
      <p>{toxicity
          ? <span className="text-red-500">This plant is poisonous to pets</span>
          : <span className="text-green-500">This plant is safe for pets</span>
          }
      </p>
      </Link>
    </article>
  )
}

PlantCard.propTypes = {
  plant: PropTypes.object.isRequired
}

export default PlantCard
