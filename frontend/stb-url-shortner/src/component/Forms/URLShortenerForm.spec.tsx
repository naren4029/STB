import { render, screen, fireEvent } from '@testing-library/react';

import URLShortenerForm from './URLShortenerForm';

describe('renders URL shortener from component', () => {
    it('should have URL shortener component', () => {
        expect(URLShortenerForm).toBeTruthy();
    })

    it('should have input container', () => {
        render(<URLShortenerForm />);
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument();
    })

    it('should have button', () => {
        render(<URLShortenerForm />);
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument();
    })

    it("should capture changes", done => {
        function inputHandler(e: any) {
            expect(e.target.value).toEqual("www.goole.com");
            done();
        }
        const { getByPlaceholderText } = render(
            <input type="text" className="form__input-text" placeholder="Enter Actual URL here" onChange={(e) => { inputHandler(e) }} />
        );
        const node = getByPlaceholderText("Enter Actual URL here");
        fireEvent.change(node, { target: { value: "www.goole.com" } });
    });

    it("should have clickable button", done => {
        function eventHandler() {
            done();
        }
        const { getByText } = render(
            <button className="btn btn--primary" onClick={() => eventHandler()}>Generate</button>
        );
        const node = getByText("Generate");
        fireEvent.click(node);
    });
})