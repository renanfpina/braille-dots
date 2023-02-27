import React from 'react'
import { render, screen } from '@testing-library/react'
import InputCharacter from './InputCharacter'
import userEvent from '@testing-library/user-event'

test('renders InputCharacter component', () => {
  render(<InputCharacter />)
  const inputElement = screen.getByRole('textbox', { name: /character/ })
  expect(inputElement).toBeInTheDocument()
})

test('Enters a character and check result', () => {
  render(<InputCharacter />)
  const inputElement = screen.getByRole('textbox', { name: /character/ })
  userEvent.type(inputElement, 'x')
  const regionElement = screen.getByText(/1, 3, 4, 6/)
  expect(regionElement).toBeInTheDocument()
})
