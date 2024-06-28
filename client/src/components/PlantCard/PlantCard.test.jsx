import React from 'react'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import PlantCard from './PlantCard'

it('contains elements required for PlantCard', () => {
    const mockPlant = {
        commonName: 'Aloe Vera',
        _id: '1',
        scientificName: 'Aloe Vera',
        image: {
            url: 'https://via.placeholder.com/150'
        }
    }
    render(
        <HelmetProvider>
            <MemoryRouter>
                <PlantCard plant={mockPlant}/>
            </MemoryRouter>
        </HelmetProvider>
    )

    const plantCardHeading = screen.getByRole('heading', {name: /Aloe Vera/i})
    expect(plantCardHeading).toBeInTheDocument()
    const plantScientificName = screen.getByTestId('scientificName')
    expect(plantScientificName).toBeInTheDocument()
    const plantCardArticle = screen.getByRole('article')
    expect(plantCardArticle).toHaveStyle({backgroundImage: 'url(https://via.placeholder.com/150)'})
})
