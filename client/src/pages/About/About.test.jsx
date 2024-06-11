import React from 'react'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import About from './About'

test('renders About page', () => {
    render(
        <HelmetProvider>
            <MemoryRouter>
                <About />
            </MemoryRouter>
        </HelmetProvider>
    )
    const aboutElement = screen.getByText(/About Houseyourplants/i)
    expect(aboutElement).toBeInTheDocument()
    }
)
