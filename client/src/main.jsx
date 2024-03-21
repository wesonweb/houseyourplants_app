import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PlantsContextProvider } from './context/PlantContext'
import { AuthContextProvider } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
        <HelmetProvider>
            <AuthContextProvider>
                <PlantsContextProvider>
                    <App />
                </PlantsContextProvider>
            </AuthContextProvider>
        </HelmetProvider>
	</React.StrictMode>,
)
