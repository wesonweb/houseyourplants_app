/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
                'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
            },
            fontSize: {
                sm: '0.8rem',
                base: '1.1rem',
                xl: '1.25rem',
                '1xl': '1.325rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
                },
                container: {
                    center: true,
                    padding: '1rem',
                },

        },
    },
    plugins: [],
}
