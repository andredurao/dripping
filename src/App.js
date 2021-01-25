// https://codepen.io/andredurao/pen/YzGMXaL
import React, { useState } from 'react';
import './App.css';

function updateLocalStorage(frequency) {
  localStorage.setItem('drippingFrequency', frequency);
}

function fetchLocalStorage() {
  let frequency = localStorage.getItem('drippingFrequency');
  if (!!!frequency) {
    return 60; // default value
  } else {
    return parseInt(frequency);
  }
}

function App() {
  // frequency: rate in drops per minute
  const [frequency, setFrequency] = useState(fetchLocalStorage());
  const [dripping, setDripping] = useState(false);
  const [intervalID, setIntervalID] = useState();
  const audio = new Audio('./beep.mp3');
  const invertState = () => {
    setDripping(!dripping);
    if (dripping) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    } else {
      audio.play().then(() => audio.pause());
      const duration = (60.0 / frequency) * 1000.0;
      !!!intervalID && setIntervalID(setInterval(beep, duration));
    }
  }
  const drop = () => {
    return dripping && <div className='drop' style={{'animation-duration': `${60.0 / frequency}s`}}> </div>;
  }
  const increaseFrequency = () => {
    updateLocalStorage(frequency+1);
    setFrequency(frequency+1);
  }
  const decreaseFrequency = () => {
    if (frequency > 0){
      updateLocalStorage(frequency-1);
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
  const buttonLabel = () => {
    return dripping ? 'Stop ⏹' : 'Start ▶️';
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
          <button type='button' className='frequency' disabled={dripping} onClick={decreaseFrequency}>-</button>
          <button type='button' className='frequency' disabled={dripping} onClick={increaseFrequency}>+</button>
        </div>
        <div className='control-panel'>
          <button type='button' className='start-button' onClick={invertState}>{buttonLabel()}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
