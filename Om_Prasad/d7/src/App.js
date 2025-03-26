import React, { useState, useEffect } from "react";
import StartButton from "./components/startButton";
import StopButton from "./components/stopButton";
import ResetButton from "./components/resetButton";
import "./App.css";

const Timer = ({ step, isRunning, globalReset }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running || isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + step);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running, isRunning, step]);

  // Global reset logic
  useEffect(() => {
    if (globalReset) {
      setTime(0);
      setRunning(false);
    }
  }, [globalReset]);

  return (
    <div className="timer-container">
      <h2>Timer ({step} sec increment)</h2>
      <h1>{time} sec</h1>
      {/* Individual buttons for each timer */}
      <StartButton onClick={() => setRunning(true)} />
      <StopButton onClick={() => setRunning(false)} />
      <ResetButton onClick={() => { setTime(0); setRunning(false); }} />
    </div>
  );
};

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [globalReset, setGlobalReset] = useState(false);

  const handleGlobalReset = () => {
    setGlobalReset(true);
    setTimeout(() => setGlobalReset(false), 100); // Reset globalReset after 100ms
  };

  return (
    <div className="app-container">
      <div className="timers">
        <Timer step={1} isRunning={isRunning} globalReset={globalReset} />
        <Timer step={2} isRunning={isRunning} globalReset={globalReset} />
      </div>
      <div className="controls">
        <h2>Global Controls</h2>
        <StartButton onClick={() => setIsRunning(true)} />
        <StopButton onClick={() => setIsRunning(false)} />
        <ResetButton onClick={handleGlobalReset} />
      </div>
    </div>
  );
};

export default App;
