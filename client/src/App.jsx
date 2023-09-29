import {  // only use for react-router-dom v6 and above
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
  } from 'react-router-dom'

// layout imports
import RootLayout from './layouts/RootLayout'
// page imports
import Home from './pages/Home'
import CreatePlant from './pages/CreatePlant'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreatePlant />} />
    </Route>
    )
  )

function App() {
  return (
    <RouterProvider router = {router} />
  )
}
export default App
