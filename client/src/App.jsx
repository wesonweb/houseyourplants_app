import {  // only use for react-router-dom v6 and above
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
  } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
// layout imports
import RootLayout from './layouts/RootLayout'
// page imports
import Home from './pages/Home'
import About from './pages/About'
import CreatePlant from './pages/CreatePlant'
import Plant from './pages/PlantPage'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'

import './App.css'
import EditPlantForm from './pages/EditPlant'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/create" element={<CreatePlant />} />
			<Route path="/plants/:id" element={<Plant />} />
			<Route path="/plants/edit/:id" element={<EditPlantForm />} />
			<Route path="/user/register" element={<Register />} />
			<Route path="/user/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

function App() {
	return (
		<>
			<RouterProvider router = {router} />
			<ToastContainer />
		</>
	)
}
export default App
