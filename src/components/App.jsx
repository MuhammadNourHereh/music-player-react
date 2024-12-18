import React, { useRef } from 'react';
import Title from './Title';
import './App.css';
import ProgressBar from './ProgressBar';
import ControlsBar from './ControlsBar';

const App = () => {

  return (
    <div className="app">
      <div className="player">
        <Title />
        <ProgressBar />
        <ControlsBar />
      </div>
      <audio id="myAudio">
        <source src="src/tracks/Bergentrückung_music.ogg" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default App;
