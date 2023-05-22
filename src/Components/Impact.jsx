import React, { useState } from 'react';

const Impact = () => {
  const [height, setHeight] = useState('');
  const [speed, setSpeed] = useState(null);

  const calculateSpeed = () => {
    const g = 9.8; // acceleration due to gravity (m/s^2)
    const time = Math.sqrt((2 * height) / g); // time taken to fall from given height (s)
    const calculatedSpeed = g * time; // speed on impact (m/s)

    setSpeed(calculatedSpeed.toFixed(2));
  };

  function fallInjuryClassification(velocity) {
    if (velocity < 1) {
      return "No significant injuries expected";
    } else if (velocity < 5) {
      return "Minor injuries (e.g., bruises, sprains) possible";
    } else if (velocity < 10) {
      return "Moderate injuries (e.g., fractures, concussions) possible";
    } else if (velocity < 15) {
      return "Severe injuries (e.g., internal organ damage, broken bones) possible";
    } else if (velocity < 20) {
      return "Life-threatening injuries (e.g., spinal injuries, severe head trauma) possible";
    } else {
      return "Potentially fatal injuries (e.g., multiple fractures, catastrophic organ damage) possible";
    }
  }
  return (
    <div>
      <h1>Impact Speed Calculator</h1>
      <div>
        <label htmlFor="height">Height (m):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateSpeed}>Calculate</button>
      {speed && (
        <p>
          The speed on impact is approximately {speed > 53 ? "53 (terminal velocity)" : speed} meters per second (m/s). {fallInjuryClassification(speed)}
        </p>
      )}
    </div>
  );
};

export default Impact;
