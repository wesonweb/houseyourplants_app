import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { MdOutlineAdd } from "react-icons/md"
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'

const Header = ({ handleClick } ) => {

    const { user } = useAuthContext()
    return (
		<header className="bg-sky-100">
            {user && (
            <div className="container mx-auto py-2 px-3 flex justify-end items-center gap-4">
                <p className="text-right mb-0">Hello, {user?.username}</p>

            </div>
            )}
			<nav className="container mx-auto px-3 py-4 flex justify-between items-center flex-wrap">
				<NavLink to="/">
					<img src={logo} alt="plant leaves" height="200" className="logo"/>
					<span className="brand-title">houseyourplants</span>
				</NavLink>
                <div>
                    <ul className="flex items-center gap-6 grow justify-end flex-wrap max-sm:mt-5">
                        {user?.username === 'wes' && user?.email === 'wesonweb@gmail.com' && (
                            <li>
                            <NavLink to="/create"
                                className="flex items-center  bg-emerald-400 px-4 py-1 rounded-full hover:bg-emerald-700 hover:text-white "
                            >
                                <MdOutlineAdd
                                    className="me-1"
                                />
                                new plant
                            </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to="/about" >
                                about
                            </NavLink>
                        </li>
                        {user && (
                            <>
                                <li>
                                    <NavLink
                                        onClick={handleClick}
                                        className=""
                                        >
                                        logout
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {!user && (
                            <>
                                <li>
                                    <NavLink to="/user/login" >
                                        login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/user/register" >
                                        sign up
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
			</nav>
		</header>
	)
}

export default Header

Header.propTypes = {
	handleClick: PropTypes.func
}
