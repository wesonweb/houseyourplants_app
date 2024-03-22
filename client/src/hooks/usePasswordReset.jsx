import { useState } from 'react'

export const usePasswordReset = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const resetPassword = async (email) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        const data = await response.json()
        if (!response.ok) {
            setError(data.message)
            setIsLoading(false)
            return
        }
        if (response.ok) {
            setIsLoading(false)
            console.log(data)
        }
    }
    return (
    { resetPassword, isLoading, error}
    )
}
