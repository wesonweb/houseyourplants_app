import { NavLink, Outlet } from 'react-router-dom'
import { MdOutlineAdd } from "react-icons/md"
import logo from '../assets/logo.png'

const RootLayout = () => {
  return (
    <div>
      <header className="bg-sky-100">
        <nav className="container mx-auto px-3 py-4 flex justify-between items-center">
          <NavLink to="/">
            <img src={logo} alt="plant leaves" height="200" className="logo"/>
            <span className="brand-title">houseyourplants</span>
          </NavLink>
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/about"
              >
                about
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/create"
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
      <main>
        <Outlet />
      </main>
      <footer className="bg-sky-200">
        <div className="container mx-auto">
          <p className="text-center py-4 mb-0">&copy; 2024 houseyourplants</p>
        </div>
      </footer>
    </div>

  )
}

export default RootLayout
