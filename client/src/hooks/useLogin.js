import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const { dispatch } = useAuthContext()
	const login = async (email, password) => {
		setIsLoading(true)
		setError(null)
		const response = await fetch('http://localhost:4000/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password }) // convert the object to a JSON string
		})
		const data = await response.json()
		if(!response.ok) {
			setError(data.message)
			setIsLoading(false)
			return
		}
		if (response.ok) {
            const { username, email, role, token } = data
			localStorage.setItem('user', JSON.stringify({ role, username, email, token })) // store the token in local storage
			dispatch({type: 'LOGIN', payload: { username, email, role, token  }})
            setIsLoading(false)
		}
	}
	return { login, isLoading, error}
}
