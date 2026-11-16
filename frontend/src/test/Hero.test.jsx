import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../landing_page/home/Hero';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

describe('Hero component', () => {
    it('should display the correct title', () => {
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );

        const heroImage = screen.getByAltText('homehero');

        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');

        const title = screen.getByText('Invest in everything');

        expect(title).toBeInTheDocument();
    });
});