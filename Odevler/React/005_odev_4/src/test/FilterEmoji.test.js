import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('Filter Emoji', () => {

    let emojiFilter;
    beforeEach(() => {
        render(<App />);
        // ekranda input'umuzu buluyoruz.
        emojiFilter = screen.getByTestId("inputText");
    })

    test('emoji filterleme testi.', () => {
        const emoji = 'Joy';
        // fireEvent ile inputa aranacak emojiyi yazdırıyoruz.
        fireEvent.click(emojiFilter, emoji);
        expect(screen.getByText(emoji)).toBeInTheDocument();
    })

})