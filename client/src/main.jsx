import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PlantsContextProvider } from './context/PlantContext'
import { AuthContextProvider } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
        <AuthContextProvider>
            <PlantsContextProvider>
                <App />
            </PlantsContextProvider>
        </AuthContextProvider>
	</React.StrictMode>,
)
