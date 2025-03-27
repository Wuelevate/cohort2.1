import Timer from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Timer App</h1>
      <div className="timers">
        <Timer />
        <Timer />
      </div>
    </div>
  );
}

export default App;
