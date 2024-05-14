import { useState } from 'react'
import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Modal from '../Modal'

import { MdModeEdit } from "react-icons/md"
import { FaTrash } from "react-icons/fa"
import Button from '../Button/Button'
export default function EditDeleteBar({ handleDeletePlant, id}) {

  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
        <div className="flex justify-end">
            <Link to={`/plants/edit/${id}`}
                aria-label="edit plant"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 me-3 rounded">
                <div className="flex items-center">
                    <MdModeEdit className="me-2" />
                    Edit
                </div>
            </Link>
            <Button
                warning
                aria-label="delete plant"
                onClick={toggleModal}
            >
                <div className="flex items-center">
                    <FaTrash className="me-2" />
                    Delete
                </div>
            </Button>
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
  handleDeletePlant: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}
