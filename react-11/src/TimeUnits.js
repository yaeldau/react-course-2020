import React, {useState} from 'react';

export default class TimeUnits extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
            timeInHours: 1
        }
  }

  setTimeSeconds(e) {
    this.setState({timeInHours: Number(e.target.value) / 60 / 60})
  }

  setTimeMinutes(e) {
    this.setState({timeInHours: Number(e.target.value) / 60})
  }

  setTimeHours(e) {
    this.setState({timeInHours: Number(e.target.value)})
  }

  render() {

    const {timeInHours} = this.state;

    return (
        <div>
            <div>
                <p>Seconds: </p>
                <input onChange={(e) => this.setTimeSeconds(e)} value={timeInHours * 60 * 60}/>
            </div>
            <div>
                <p>Minutes: </p>
                <input onChange={(e) => this.setTimeMinutes(e)} value={timeInHours * 60}/>
            </div>
            <div>
                <p>Hours: </p>
                <input onChange={(e) => this.setTimeHours(e)} value={timeInHours}/>
            </div>
      </div>
    );
  }
}