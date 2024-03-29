import PropTypes from 'prop-types';
import { BsHouseHeartFill } from "react-icons/bs";

const PositionFilter = ({ setPositions, isPositionChecked, setIsPositionChecked }) => {

    const positionOptions = ['floor', 'table', 'hanging']

    const handlePositionChange = (e) => {
        const selectedPosition = e.target.value
        const isCheckedValue = e.target.checked

        setIsPositionChecked({
            ...isPositionChecked,
            [selectedPosition]: isCheckedValue
        });

        if (isCheckedValue) {
            // add current selection to the array along with any previous selections
            setPositions((prevPosition) => [...prevPosition, selectedPosition])
        } else {
            // remove current selection from the array
            setPositions((prevPosition) => prevPosition.filter((position) => position !== selectedPosition))
        }
    }


    return (
        <>
            <BsHouseHeartFill
                className="w-5 h-5 me-1 text-blue-700"
            />
            <span className="inline-block me-3">Position:</span>

            {positionOptions.map((positionOption, index) => (
                <div
                    key={index}
                    className="flex items-center"
                >
                    <label
                        htmlFor={positionOption}
                    >
                        {positionOption}
                    </label>
                    <input
                        type="checkbox"
                        id={positionOption}
                        name={positionOption}
                        value={positionOption}
                        checked={isPositionChecked[positionOption]}
                        onChange={handlePositionChange}
                        className="ms-2 me-5 w-4 h-4 accent-blue-700"
                    />
                </div>
            ))}
        </>
    );
};

PositionFilter.propTypes = {
    setPositions: PropTypes.func.isRequired,
    isPositionChecked: PropTypes.object.isRequired,
    setIsPositionChecked: PropTypes.func.isRequired
};

export default PositionFilter;
