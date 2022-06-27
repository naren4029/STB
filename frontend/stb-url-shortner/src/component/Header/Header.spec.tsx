import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('renders header component', () => {
    it('should contain header text', () => {

        expect(Header).toBeTruthy();
        render(<Header />);
        const headerContent = screen.getByText('STB - URL Shortener App');
        expect(headerContent).toBeInTheDocument();

    })
})