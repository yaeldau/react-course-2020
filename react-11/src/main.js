import React from 'react';
import ReactDOM from 'react-dom';


import '../css/main.css';
import ColorPallet from './ColorPallet';
import GuessingNumberGame from './GuessingNumberGame';
import InputColor from './InputColor';
import MultiInput from './MultiInput';
import TimeUnits from './TimeUnits';

const App = () => {

  return (
    <div>
      <p>ex. 1</p>
      <MultiInput />
      <br/>
      <p>ex. 2</p>
      <TimeUnits/>
      <br/>
      <p>ex. 3</p>
      <GuessingNumberGame />
      <br/>
      <p>ex. 4</p>
      <InputColor initColor={'black'}/>
      <br/>
      <p>ex. 5</p>
      <ColorPallet  initColor={'red'}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
