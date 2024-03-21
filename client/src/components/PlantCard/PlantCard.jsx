import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

function PlantCard({ plant }) {
    const { commonName, _id, scientificName } = plant
	const { url } = plant && plant.image

    return (
        <article
            style={{backgroundImage: `url(${url})`  }   }
            className={
            `container bg-cover bg-center bg-no-repeat
            shadow hover:shadow-lg rounded h-96 flex flex-col
            transition-all duration-300 relative
            `}
            >
            <Link to={`/plants/${_id}`} className="flex flex-col h-full">
                <div
                    className="flex-col flex-1 py-1 px-3
                        bg-gradient-to-t from-slate-100 via-slate-100 to-slate-50 absolute bottom-0 left-0 w-full h-16
                    "
                >
                    <h2 className="text-xl font-semibold mb-0 tracking-wide">{commonName}</h2>
                    <span className="text-slate-600 text-norm"><em>{scientificName}</em></span>
                </div>
            </Link>
        </article>
    )
}

PlantCard.propTypes = {
    plant: PropTypes.object.isRequired
}

export default PlantCard
