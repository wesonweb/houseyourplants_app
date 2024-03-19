import PropTypes from 'prop-types'
import { MdPets } from "react-icons/md"
const ToxicityFilter = ({ isNotToxic, setIsNotToxic}) => {

    const handlePetFriendlyChange = (e) => {
        setIsNotToxic(e.target.checked)
    }

    return (
        <>
            <MdPets
                className="w-5 h-5 me-1 text-violet-600"
            />
            <label
                htmlFor="toxicity"
            >Pet friendly</label>
            <input
                type="checkbox"
                id="toxicity"
                name="toxicity"
                checked={isNotToxic}
                onChange={handlePetFriendlyChange}
                className="w-4 h-4 accent-violet-800"
            />
        </>
    )
}

ToxicityFilter.propTypes = {
    isNotToxic: PropTypes.bool.isRequired,
    setIsNotToxic: PropTypes.func.isRequired
}

export default ToxicityFilter
