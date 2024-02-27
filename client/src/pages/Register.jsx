import { useState } from 'react'
import { useRegister } from '../hooks/useRegister'
import { toast } from 'react-toastify'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
    const { register, isLoading, error } = useRegister()

	const handleSubmit = async (e) => {
		e.preventDefault()
        await register(username, email, password)
        if (error) {
            toast.error('Please ensure you have completed all fields correctly')
            return
        }
	}

    const btnPrimary="bg-green-600 hover:bg-green-700 text-white font-bold mt-6 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:opacity-35"

	return (
		<section className="flex flex-col md:flex-row h-screen items-center md:justify-center">
			<form
				onSubmit={handleSubmit}
                className="w-full max-w-md mt-6 bg-white p-8 rounded-lg"
				>
				<h1 className="text-2xl">Create an account</h1>
                <div className="mt-4">
                    <label className="block text-gray-700">Create a username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="eg johndoe"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                </div>
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
                    <span className="text-sm text-slate-500 inline-block mt-2">Password must be at least 8 characters long, contain upper and lower case, at least one number and one special character</span>
                </div>
				<button disabled={isLoading} className={btnPrimary}>Register</button>
                {isLoading && <p className="text-gray-500 mt-2">Loading...</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}
			</form>
		</section>
		)
}

export default Register
