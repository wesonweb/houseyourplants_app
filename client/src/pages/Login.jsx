import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Helmet } from 'react-helmet-async'
import Button from '../components/Button/Button'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e) => {
		e.preventDefault()
        await login(email, password)
	}

	return (
        <>
            <Helmet>
                <title> houseyourplants - log in</title>
                <meta
                    name="description"
                    content="houseyourplants - log in to your account"
                />
                <link rel="canonical" href="/user/login"></link>
            </Helmet>
            <section className="flex flex-col md:flex-row h-screen items-center md:justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md mt-6 bg-white p-8 rounded-lg"
                    >
                    <h1 className="text-2xl">Sign in to your account</h1>
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
                    <Button disabled={isLoading} primary>Login</Button>
                    {isLoading && <p className="text-gray-500 mt-2">Loading...</p>}
                    {error && <p className="text-red-500 mt-2">{error}</p>}

                </form>
            </section>
        </>
		)
}

export default Login
