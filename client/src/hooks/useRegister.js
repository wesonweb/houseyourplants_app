import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useRegister = () => {
    const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const { dispatch } = useAuthContext()
	const register = async (username, email, password) => {
		setIsLoading(true)
		setError(null)
		const response = await fetch('http://localhost:4000/api/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, email, password }) // convert the object to a JSON string
		})
		const data = await response.json()
		if(!response.ok) {
			setError(data.message)
			setIsLoading(false)
			return
		}
		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(data)) // store the token in local storage
			dispatch({type: 'LOGIN', payload: data}) // dispatch the action to the reducer
			setIsLoading(false)
		}
	}
	return { register, isLoading, error }
}
