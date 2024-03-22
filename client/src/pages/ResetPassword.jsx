import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
const PasswordReset = () => {
	const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
		e.preventDefault()
        console.log('clicked')
	}

    const btnPrimary="bg-green-600 hover:bg-green-700 text-white font-bold mt-6 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:opacity-35"

	return (
        <>
            <Helmet>
                <title> houseyourplants - reset password</title>
                <meta
                    name="description"
                    content="houseyourplants - reset your password"
                />
                <link rel="canonical" href="/user/password-reset"></link>
            </Helmet>
            <section className="flex flex-col h-screen items-center md:justify-center">
                <div className="w-full max-w-md mt-6 bg-white px-6 pt-6 pb-5 rounded-lg">
                    <form
                    onSubmit={handleSubmit}
                    className=""
                    >
                    <h1 className="text-2xl">Reset password</h1>
                    <span className="text-slate-800">Enter your email address and password instructions will be sent to you.</span>
                    <div className="mt-4">
                        <label className="block text-gray-700">Your email address:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="enter your email address"
                            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        />
                    </div>

                    <button disabled={isLoading} className={btnPrimary}>Reset password</button>
                    {isLoading && <p className="text-gray-500 mt-2">Loading...</p>}
                    {error && <p className="text-red-500 mt-2">{error}</p>}

                </form>

                <p className="m-0 text-slate-700">Not registered? <Link to="/user/register" className="w-auto inline-block mt-4">Create an account</Link></p>
                </div>


            </section>
        </>
		)
}

export default PasswordReset
