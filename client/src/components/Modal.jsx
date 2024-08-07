
import PropTypes from 'prop-types'
import { IoMdClose } from "react-icons/io"
import Button from './Button/Button'
const Modal = ({ handleDeletePlant, openModal, toggleModal }) => {

	return (
		<>
			{openModal && (
			<div
			className={`fixed inset-0 flex justify-center items-center transition-colors ${openModal ? "bg-black/30 modal-open" : ""} `}
			onClick={toggleModal}
			>
				<div
					aria-modal="true"
					className="bg-white rounded-xl p-6 shadow transition-all relative"
					onClick={(e) => e.stopPropagation()}
				>
					<header className="flex justify-around">
					<h2 className="text-2xl mt-8 mb-0">Are you sure you want to delete this plant?</h2>
					<button
						className="text-gray-500 absolute top-2 right-2 hover:text-red-700 transition-colors"
						onClick={toggleModal}>
							<span className="visually-hidden">close</span>

						<IoMdClose aria-hidden="true" size={24} />
					</button>
					</header>
					<div
					className={`flex justify-center gap-5 pt-8 ${openModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
						<Button
							aria-label="cancel delete plant"
							cancel
							onClick={toggleModal}
						>
							Cancel
						</Button>
							<Button
                                warning
                                onClick={handleDeletePlant}
                            >
							Yes, delete
						</Button>
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
