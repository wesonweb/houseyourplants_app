import { NavLink } from 'react-router-dom'
import { MdOutlineAdd } from "react-icons/md"
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'

const Header = ({ handleClick } ) => {

	return (
		<header className="bg-sky-100">
			<nav className="container mx-auto px-3 py-4 flex justify-between items-center">
				<NavLink to="/">
					<img src={logo} alt="plant leaves" height="200" className="logo"/>
					<span className="brand-title">houseyourplants</span>
				</NavLink>

				<ul className="flex items-center gap-6">
					<li>
						<NavLink onClick={handleClick}>
							logout
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" >
							about
						</NavLink>
					</li>
					<li>
						<NavLink to="/user/register" >
							register
						</NavLink>
					</li>
					<li>
						<NavLink to="/user/login" >
							login
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/create"
							className="flex items-center bg-emerald-400 px-4 py-1 rounded-full hover:bg-emerald-700 hover:text-white "
						>
							<MdOutlineAdd
								className="me-1"
							/>
							new plant
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

Header.propTypes = {
	handleClick: PropTypes.func
}
