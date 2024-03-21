import notFound404 from '../assets/404.svg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function NotFound() {
    return (
        <>
            <Helmet>
                <title> - 404 not found</title>
                <meta
                    name="description"
                    content="houseyourplants - page not found"
                />
            </Helmet>
            <div className="flex flex-col justify-center items-center h-full w-full">
                <img src={notFound404} alt="404 page not found" />
                <div className="w-100 h-100 mt-24">
                    <h1 className="text-4xl">Oops...that page cannot be found.</h1>
                    <p className="text-xl">Sorry about that.</p>
                    <p className="text-lg">Maybe you can find what you&apos;re looking for on the home page.</p>
                    <Link to="/" className="w-auto inline-block bg-emerald-400 px-5 py-2 mt-3 fit-content rounded-full hover:bg-emerald-700 hover:text-white">
                    Go to Home
                    </Link>
                </div>
            </div>

        </>
    )
}

export default NotFound
