// https://codepen.io/andredurao/pen/YzGMXaL
import React, { useState } from 'react';
import './App.css';

function App() {
  // frequency: rate in drops per minute
  const [frequency, setFrequency] = useState(30);
  const [dripping, setDripping] = useState(true);
  const [intervalID, setIntervalID] = useState();
  const invertState = () => {
    setDripping(!dripping);
    if (dripping) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }
  const drop = () => {
    return dripping && <div className="drop" style={{"animation-duration": `${60.0 / frequency}s`}}> </div>;
  }
  const increaseFrequency = () => {
    setFrequency(frequency+1);
  }
  const decreaseFrequency = () => {
    if (frequency > 0){
      setFrequency(frequency-1);
    }
  }
  const beep = () => {
    document.getElementById('play').play();
  };
  const startBeep = () => {
    const duration = (60.0 / frequency) * 1000.0;
    !!!intervalID && setIntervalID(setInterval(beep, duration));
  }
  return (
    <div className="App">
      <audio id="play" src={process.env.PUBLIC_URL + '/beep.mp3'}></audio>
      <header className="App-header">
        <div className="drip-container">
          { drop() }
        </div>
        <div className="control-panel">
          <button type="button" onClick={decreaseFrequency}>-</button>
          <button type="button" onClick={increaseFrequency}>+</button>
          {frequency} drops per minute
        </div>
        <div className="control-panel">
          <button type="button" className="start-button" onClick={invertState}>Start/Stop</button>
        </div>
        <div className="control-panel">
          <button type="button" className="start-button" onClick={startBeep}>beep</button>
        </div>
      </header>
    </div>
  );
}

export default App;
