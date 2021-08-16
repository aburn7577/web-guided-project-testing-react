import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MissionForm from './MissionForm'

test('Renders without errors', () => {
    render(<MissionForm />)
})
test('displays message if fetching Data is true', () => {
    //Act:
    render(<MissionForm isFetchingData={true} />);

    //Arrange:
    //1. Attempt to find message
    const message = screen.queryByText(/we are fetching data/i);
    //2. Attempt to find button
    const button = screen.queryByRole("button");

    //Assert:
    //1. expect message to exist.
    expect(message).toBeInTheDocument();
    expect(message).toBeTruthy();
    expect(message).toHaveTextContent('we are fetching data');
    expect(message).not.toBeNull();

    //2. expect button NOT to exist.
    expect(button).not.toBeInTheDocument();
})
test('displays button if fetching Data is false', () => {
    render(<MissionForm isFetchingData={false} />);

    const message = screen.queryByText(/we are fetching data/i);
    const button = screen.queryByRole("button");

    expect(message).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();
})
test('executes getData if button is clicked', () => {
    // const fakeFunction = ()=> {
    //     console.log("fake function engaged");
    // }
    const fakeGetData = jest.fn();

    //Arrange: Setup our component code.
    // render(<MissionForm isFetchingData={false} getData={() => {
    //     fakeGetData("warren", Math.random());
    // }} />);
    render(<MissionForm isFetchingData={false} getData={fakeGetData} />);
    //Act:
    // - Get our button
    const button = screen.queryByRole("button");

    // - Click our button
    userEvent.click(button);

    //Assert
    // - Does our getData function execute
    // console.log(fakeGetData.mock);
    expect(fakeGetData.mock.results.length === 1).toBeTruthy();
    expect(fakeGetData.mock.results.length).toBe(1);
    expect(fakeGetData.mock.results).toHaveLength(1);
    expect(fakeGetData).toBeCalledTimes(1);
})