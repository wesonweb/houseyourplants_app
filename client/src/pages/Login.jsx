import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { toast } from 'react-toastify'
const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()
    let navigate = useNavigate()
	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(email, password)
        navigate('/')
        toast.success('You have logged in successfully!')

	}

    const btnPrimary="bg-green-600 hover:bg-green-700 text-white font-bold mt-6 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:opacity-35"

	return (
		<section className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
			<form
				onSubmit={handleSubmit}
                className="w-full max-w-md mt-6 bg-white p-8 rounded-lg"
				>
				<h1 className="text-2xl">Login</h1>
                <div className="mt-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="enter your email address"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="enter your password"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    />
                </div>
				<button disabled={isLoading} className={btnPrimary}>Login</button>
                {isLoading && <p className="text-gray-500 mt-2">Loading...</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}

			</form>
		</section>
		)
}

export default Login
