import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import InputFocus from "./InputFocus";

const App = () => {
  return (
      <div>
        <InputFocus />
      </div>
  )
}

const root = document.querySelector('main');
ReactDOM.render(<App/>, root);