import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CourseCard from '../components/CourseCard';

describe('CourseCard', () => {
    it('renders title and description', () => {
        render(
            <CourseCard
                title="Intro a Solidity"
                description="Aprende lenguajes de smart contracts"
                slug="/docs/cursos/solidity"
            />
        );

        expect(screen.getByText('Intro a Solidity')).toBeInTheDocument();
        expect(screen.getByText('Aprende lenguajes de smart contracts')).toBeInTheDocument();
    });

    it('renders link with correct href', () => {
        render(
            <CourseCard
                title="Intro a Solidity"
                description="Aprende lenguajes de smart contracts"
                slug="/docs/cursos/solidity"
            />
        );

        const link = screen.getByRole('link', { name: /ver curso/i });
        expect(link).toHaveAttribute('href', '/docs/cursos/solidity');
    });
});
