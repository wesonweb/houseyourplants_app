import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function PlantCard({ plant }) {

  const { commonName, scientificName, _id } = plant
  return (
    <article className="container mt-4 bg-white shadow hover:shadow-md rounded">
      <Link to={`/plants/${_id}`} className="block h-full p-4">
      <h1 className="text-2xl mb-2">{commonName}</h1>
      <span><em>{scientificName}</em></span>
      </Link>
    </article>
  )
}

PlantCard.propTypes = {
  plant: PropTypes.object.isRequired
}

export default PlantCard
