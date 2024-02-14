import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import { useLogout } from '../hooks/useLogout'

const RootLayout = () => {

    const { logout } = useLogout()

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }
	return (
		<div>
			<Header
                handleClick={handleClick}
                useLogout={useLogout}
            />
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
