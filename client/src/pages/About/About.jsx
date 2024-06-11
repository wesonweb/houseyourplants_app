import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function About() {
    return (
        <>
        <Helmet>
            <title>About houseyourplants</title>
            <meta
                name="description"
                content="houseyourplants - about the app and the developer"
            />
            <link rel="canonical" href="/about" />
        </Helmet>
        <article className="container p-4 md:p-6">
            <h1 className="text-4xl mb-3 md:mb-5">About Houseyourplants</h1>
            <p>Hi, I&#39;m Wes and I&#39;m a big fan of house plants. They not only look good but they&#39;re good for your health - both physical and mental.</p>
            <p>A lot of people struggle with finding a plant that will survive their neglect or the conditions in their home.</p>
            <p>I&#39;ve created this app to provide information on common plants you can get from most garden centers or hardware shops. You can also filter plants by your own requirements. The content and images are mine and I plan to keep adding plants so check back for more!</p>

            <p>Special shout out to Laura Carvajal who provided support and helped review my PRs!</p>
            <h2 className="text-xl">The tech stuff</h2>
            <p>This site was built using React, Node.js, Express.js and MongoDB. You can <Link to="https://wesonweb.co.uk">learn more about how I built it on my website</Link>.</p>
        </article>
        </>

    )
}

export default About
