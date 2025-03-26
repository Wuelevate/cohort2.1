import React, { useState, useEffect } from "react";
import StartButton from "./components/startButton";
import StopButton from "./components/stopButton";
import ResetButton from "./components/resetButton";
import "./App.css";

const Timer = ({ step, isRunning, globalReset, globalStop }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + step);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running, step]);

  // Sync with Global Start/Stop
  useEffect(() => {
    if (isRunning) {
      setRunning(true);
    }
  }, [isRunning]);

  // Global Stop Logic
  useEffect(() => {
    if (globalStop) {
      setRunning(false);
    }
  }, [globalStop]);

  // Global Reset logic
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
  const [globalStop, setGlobalStop] = useState(false);
  const [globalReset, setGlobalReset] = useState(false);

  const handleGlobalReset = () => {
    setGlobalReset(true);
    setTimeout(() => setGlobalReset(false), 100);
  };

  const handleGlobalStop = () => {
    setIsRunning(false);
    setGlobalStop(true);
    setTimeout(() => setGlobalStop(false), 100);
  };

  return (
    <div className="app-container">
      <div className="timers">
        <Timer step={1} isRunning={isRunning} globalReset={globalReset} globalStop={globalStop} />
        <Timer step={2} isRunning={isRunning} globalReset={globalReset} globalStop={globalStop} />
      </div>
      <div className="controls">
        <h2>Global Controls</h2>
        <StartButton onClick={() => setIsRunning(true)} />
        <StopButton onClick={handleGlobalStop} />
        <ResetButton onClick={handleGlobalReset} />
      </div>
    </div>
  );
};

export default App;
