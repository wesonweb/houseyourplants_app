
import PropTypes from 'prop-types'
import { IoMdClose } from "react-icons/io"
const Modal = ({ handleDeletePlant, openModal, toggleModal }) => {

  return (
    <>
        {openModal && (
          <div
            className={`fixed inset-0 flex justify-center items-center transition-colors ${openModal ? "bg-black/30 modal-open" : ""} `}
            onClick={toggleModal}
          >
            <div
              className="bg-white rounded-xl p-6 shadow transition-all relative"
              onClick={(e) => e.stopPropagation()}
            >
            <header className="flex justify-around">
              <h2 className="text-2xl mt-8 mb-0">Are you sure you want to delete this plant?</h2>
              <button
                className="text-gray-500 absolute top-2 right-2 hover:text-red-700 transition-colors"
                onClick={toggleModal}>
                <IoMdClose size={24} />
              </button>
            </header>
            <div
              className={`flex justify-center gap-5 pt-8 ${openModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
              <button
                className="bg-gray-500 hover:bg-gray-600 shadow text-white font-bold py-2 px-4 rounded"
                onClick={toggleModal}
                >
                Cancel
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 shadow text-white font-bold py-2 px-4 rounded"
                  onClick={handleDeletePlant}
                  >
                  Yes, delete
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Modal

Modal.propTypes = {
  handleDeletePlant: PropTypes.func.isRequired,
  openModal: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired
}
