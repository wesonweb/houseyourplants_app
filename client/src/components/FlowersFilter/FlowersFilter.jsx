import PropTypes from 'prop-types'
import { LuFlower } from "react-icons/lu"

const FlowersFilter = ({ hasFlowers, setHasFlowers }) => {
   const handleFlowersChange = (e) => {
        setHasFlowers(e.target.checked)
    }

    return (
        <>
        <LuFlower
            className="w-5 h-5 me-1 text-rose-600"
        />
            <label
                htmlFor="flowers"
            >Flowers</label>
            <input
                type="checkbox"
                id="flowers"
                name="flowers"
                checked={hasFlowers}
                onChange={handleFlowersChange}
                className="w-4 h-4 accent-rose-800"
            />
        </>
    )
}

FlowersFilter.propTypes = {
    hasFlowers: PropTypes.bool.isRequired,
    setHasFlowers: PropTypes.func.isRequired
}

export default FlowersFilter
