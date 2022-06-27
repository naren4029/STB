import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders app component', () => {

  it('should have header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument();
  })

  it('should have input container', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument();
  })

  it('should have button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
  })

});
