import React from 'react';

// This is a well-named helper function that is exported and used correctly
export const calculateEngineThrust = (mass, acceleration) => {
    const totalThrustOutput = mass * acceleration;
    return totalThrustOutput;
};

export const DashboardWidget = () => {
    const engineMass = 500;
    const currentAcceleration = 9.8;
    
    // We call the function properly
    const output = calculateEngineThrust(engineMass, currentAcceleration);
    
    return (
        <div>
            <h1>Dashboard Widget</h1>
            <p>Engine Thrust: {output}</p>
        </div>
    );
};
