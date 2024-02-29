import { Link } from 'react-router-dom'
import { MdArrowCircleLeft } from "react-icons/md";

const PlantNavigation = () => {
    return (
        <div className="py-8 md:text-xl  md:my-8 md:mx-auto md:w-8/12 xl:w-6/12">
            <Link
                to="/"
                className="bg-green-600 hover:bg-green-700 text-white font-bold mt-4 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:opacity-35 flex items-center w-64"
            >
                <MdArrowCircleLeft size={24} className="me-2" />
                Back to all plants
            </Link>
        </div>
    )
}

export default PlantNavigation
