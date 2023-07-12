import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
  };

  const lapTimer = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{(time / 1000).toFixed(3)}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={lapTimer}>Lap</button>
      {laps.length > 0 && (
        <div className="lap-section">
          {laps.map((lapTime, index) => (
            <p key={index}>{(lapTime / 1000).toFixed(3)}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
