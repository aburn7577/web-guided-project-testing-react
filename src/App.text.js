import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders Appw without error', () => {
  render(<App />)
})

test('renders mission data when button is clicked', () => {
  //arrange: render app
  render(<App />)
  //act:get data from api? and push button
  const button = screen.getByRole('button')
  userEvent.click(button)
  //assert: we should see same # of missions when api returns

})