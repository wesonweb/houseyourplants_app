import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PlantsContextProvider } from './context/PlantContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PlantsContextProvider>
			<App />
		</PlantsContextProvider>
	</React.StrictMode>,
)
