import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import emojiList from '../emojiList.json'


describe("Emoji Listeleme Render İşlemi", () => {
    beforeEach(() => {
        render(<App />)
    })
    test("EmojiResults componentinde emoji listesi başarılı bir şekilde render ediliyor", () => {

        const emojieList = emojiList.slice(0, 20);
        emojieList.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })
})