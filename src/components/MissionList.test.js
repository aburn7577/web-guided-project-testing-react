import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionsList from './MissionsList';

test("renders component without errors", () => {
    render(<MissionsList missions={[]} />);
});

const missionObjects = [
    {
        mission_name: "Mission 1",
        mission_id: 1
    },
    {
        mission_name: "Mission 2",
        mission_id: 2
    }
];

test("renders missions after rendering no missions", () => {
    //Arrange: Render MissionsList with missions = []
    const { rerender } = render(<MissionsList missions={[]} />);

    //Act: Try to find missions
    let missions = screen.queryAllByTestId('mission');

    //Assert: Confirm no missions on the screen.
    expect(missions).toHaveLength(0);

    //Arrange 2: Rerender MissionsList with missions
    rerender(<MissionsList missions={missionObjects} />);

    //Act: Try to find missions
    missions = screen.queryAllByTestId('mission');

    //Assert: Missions are now on the screen
    expect(missions).toHaveLength(1);
});
