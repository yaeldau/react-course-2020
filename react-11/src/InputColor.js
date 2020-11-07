import React, {useState} from 'react';

export default class InputColor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.initColor
        }
    }

    render() {

        const {color} = this.state;

        const style = {
            background: color, width:'200px', height:'200px'
        }

        return(
            <>
                <div style={style}></div>
                <input type="color" value={color} onChange={(e) => this.setState({color: e.target.value})}/>
            </>
        )
    }
}