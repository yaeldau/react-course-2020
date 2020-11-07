import React, {useState} from 'react';

export default class MultiInput extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
            numberOfInputs: 5,
            text: "type something..."
        }
  }

  setText(e) {
    this.setState({text: e.target.value});
  };

  render() {

    const {text, numberOfInputs} = this.state;
[]
    return (
        <div>
          {[...Array(numberOfInputs).keys()].map((o, i) => 
          <input key={i} onChange={(e) => this.setText(e)} value={text}/>)}
      </div>
    );
  }
}