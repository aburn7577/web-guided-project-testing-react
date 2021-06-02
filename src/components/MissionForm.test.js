import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MissionForm from './MissionForm'

test('MissionForm renders correctly without errors', () => {
  render(<MissionForm />)
})

// does componet render correctly when isFetchingData is true?
test('render message correctly when isFetchingData is true', () => {
  // Arrange: show MissionForm with isFetchingData =true
  render(<MissionForm isFetchingData={true} />)
  //act: query text 'we are fetchig data'
  const item = screen.getByText(/we are fetching data/i)
  //assert: 'we are fetching data' exist on page
  expect(item).not.toBeNull()
  expect(item).toBeInTheDocument()

})
// does componet render correctly when isFetchingData is false?
test('render message correctly when isFetchingData is false', () => {
  // does componet render correctly when isFetchingData is false?
  render(<MissionForm isFetchingData={false} />)
  //act: query Button should be on page
  const button = screen.getByRole('button')
  //assert: 'we are fetching data' Not exist on page, button on page
  expect(button).toBeInTheDocument
})
//when we have a paice of user input, does getData execute?
test('calls getData when button is called', () => {
  //mock function
  const fakeGetData = jest.fn(() => {
    return ('this is fake data')
  })

  //make sure we can see our button
  // arrange:
  render(<MissionForm isFetchingData={false} getData={fakeGetData} />)
  //act:
  const button = screen.getByRole('button')
  userEvent.click(button)
  //assert:
  // console.log(fakeGetData.mock)
  expect(fakeGetData.mock.calls.length).toBe(1)
  expect(fakeGetData.mock.calls).toHaveLength(1)
  expect(fakeGetData).toHaveBeenCalled()
  expect(fakeGetData).toHaveBeenCalledTimes(1)

})