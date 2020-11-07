import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import InputFocus from "./InputFocus";
import UserFormRef from "./UserFormRef";

const App = () => {
  return (
      <div>
        {/*<InputFocus />*/}
        <UserFormRef />
      </div>
  )
}

const root = document.querySelector('main');
ReactDOM.render(<App/>, root);