import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                if(response.ok) {
                    setLoading(false)
                    setData(data)
                    setError(null)
                }
            }
        catch (error) {
            setError(error)
            console.error(error)
            }
        }
    fetchPlant()
    }, [url])

    return { data, loading, error }
}
export default useFetch
