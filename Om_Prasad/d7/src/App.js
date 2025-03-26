import React, { useState, useEffect } from "react";
import StartButton from "./components/startButton";
import StopButton from "./components/stopButton";
import ResetButton from "./components/resetButton";

const Timer = ({ step }) => {
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

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h2>Timer ({step} sec increment)</h2>
      <h1>{time} sec</h1>
      <StartButton onClick={() => setRunning(true)} />
      <StopButton onClick={() => setRunning(false)} />
      <ResetButton onClick={() => { setTime(0); setRunning(false); }} />
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "50px" }}>
      <Timer step={1} />
      <Timer step={2} />
    </div>
  );
};

export default App;
