// https://codepen.io/andredurao/pen/YzGMXaL
import React, { useState } from 'react';
import './App.css';

function App() {
  // frequency: rate in drops per minute
  const [frequency, setFrequency] = useState(30);
  const [dripping, setDripping] = useState(true);
  const [intervalID, setIntervalID] = useState();
  const audio = new Audio('./beep.mp3');
  const invertState = () => {
    setDripping(!dripping);
    if (dripping) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }
  const drop = () => {
    return dripping && <div className='drop' style={{'animation-duration': `${60.0 / frequency}s`}}> </div>;
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
    audio.play();
  };
  const startBeep = () => {
    audio.play().then(() => audio.pause());
    const duration = (60.0 / frequency) * 1000.0;
    !!!intervalID && setIntervalID(setInterval(beep, duration));
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='drip-container'>
          { drop() }
        </div>
        <div className='control-panel'>
          <p className='text'>
            {frequency} drops per minute
          </p>
          <button type='button' className='frequency' onClick={decreaseFrequency}>-</button>
          <button type='button' className='frequency' onClick={increaseFrequency}>+</button>
        </div>
        <div className='control-panel'>
          <button type='button' className='start-button' onClick={invertState}>Start/Stop</button>
        </div>
        <div className='control-panel'>
          <button type='button' className='start-button' onClick={startBeep}>beep</button>
        </div>
      </header>
    </div>
  );
}

export default App;
