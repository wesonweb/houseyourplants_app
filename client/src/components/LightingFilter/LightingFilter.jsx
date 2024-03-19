import PropTypes from 'prop-types'
import { MdSunny } from "react-icons/md";
const LightingFilter = ({setLightingRequirements, isLightingChecked, setIsLightingChecked}) => {

    const lightingOptions = ['low', 'medium', 'direct']

    const handleLightingChange = (e) => {
        const selectedLighting = e.target.value
        const isCheckedValue = e.target.checked

        setIsLightingChecked({
            ...isLightingChecked,
            [selectedLighting]: isCheckedValue
        })
        if (isCheckedValue) {
            // add current selection to the array along with any previous selections
            setLightingRequirements((prevRequirements) => [...prevRequirements, selectedLighting])

        } else {
            // remove current selection from the array
            setLightingRequirements((prevRequirements) => prevRequirements.filter((lighting) => lighting !== selectedLighting))
        }
    }

    return (
        <>
        <MdSunny
            className="w-5 h-5 me-1 text-yellow-400"
        />
        <span className="inline-block me-3">Lighting:</span>
        {lightingOptions.map((lightingOption, index) => (
            <div
                key={index}
                className="flex items-center"
            >
                <label
                    htmlFor={lightingOption}
                >
                    {lightingOption === 'direct' ? 'bright' : lightingOption}
                </label>
                <input
                    type="checkbox"
                    id={lightingOption}
                    name={lightingOption}
                    value={lightingOption}
                    checked={isLightingChecked[lightingOption]}
                    onChange={handleLightingChange}
                    className="ms-2 me-5 w-4 h-4 accent-yellow-400"
                />
            </div>
        ))}
        </>
    )
}

LightingFilter.propTypes = {
    setLightingRequirements: PropTypes.func.isRequired
}

export default LightingFilter
