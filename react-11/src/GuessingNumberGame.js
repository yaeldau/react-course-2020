import React, {useState} from 'react';
import _ from 'lodash';

export default class GuessingNumberGame extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
            ans: this.getRandomNumber(1, 1000),
            guess: 0,
        }
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  showMsg(guess, ans) {
      if (guess) {
      const showCorrentAns = Math.random() > 0.2;
      if (showCorrentAns) {
          if (guess === ans) {
              return <p>Correct !</p>
          }
        return guess < ans ? <p>Your guess is too low</p> : <p>Your guess is too high</p>
      }
      else {
        return guess < ans ? <p>Your guess is too high</p> : <p>Your guess is too low</p>
      }
    }
  }


  render() {

    const {ans, guess} = this.state;

    return (
        <div>
            <p>Enter your guess: </p>
            <input onChange={e => this.setState({guess: Number(e.target.value)})}/>
            {this.showMsg(guess, ans)}
      </div>
    );
  }
}