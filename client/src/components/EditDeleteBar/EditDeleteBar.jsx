import { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'
export default function EditDeleteBar({ handleDeletePlant}) {

  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 me-3 rounded">
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleModal}
          >
          Delete
        </button>
      </div>
      <Modal
        handleDeletePlant={handleDeletePlant}
        openModal={openModal}
        toggleModal={toggleModal}
      />
    </>
  )
}

EditDeleteBar.propTypes = {
  handleDeletePlant: PropTypes.func.isRequired
}
