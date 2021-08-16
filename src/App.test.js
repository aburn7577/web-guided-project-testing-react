import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

import { fetchMissions } from './api/fetchMissions'
jest.mock('./api/fetchMissions')


test("renders without errors", () => {
    render(<App />);
});

test("when button is clicked, gets missions", async () => {
    fetchMissions.mockResolvedValueOnce({
        data: [
            {
                mission_id: '1',
                mission_name: 'mission 1'
            },
            {
                mission_id: '2',
                mission_name: 'mission 2'
            },
            {
                mission_id: '3',
                mission_name: 'mission 3'
            }
        ]
    })
    //Arrange:
    render(<App />);

    //Act:

    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert:
    // setTimeout(() => {
    //     const missions = screen.getAllByTestId('mission')
    // }, 100)
    const missions = await screen.findAllByTestId('mission')
    expect(missions).toHaveLength(3)


});