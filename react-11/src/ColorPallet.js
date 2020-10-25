import React, {useState} from 'react';
var tinycolor = require("tinycolor2");

export default class ColorPallet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.initColor
        }
    }

    createStyle(color, value) {
        let newColor;
        if (value > 0) {
            newColor = tinycolor(color).darken(value);
        }
        else {
            newColor = tinycolor(color).desaturate(0 - value);
        }
        return {
            width: '50px',
            height: '50px',
            display: 'inline-block',
            background: newColor
        };
    }

    render() {

        const {color} = this.state;

        return(
            <>
                <input type="color" value={color} onChange={(e) => this.setState({color: e.target.value})}/>
                <div>
                    <div style={this.createStyle(color, -60)}/>
                    <div style={this.createStyle(color, -45)}/>
                    <div style={this.createStyle(color, -30)}/>
                    <div style={this.createStyle(color, -15)}/>
                    <div style={this.createStyle(color, 0)}/>
                    <div style={this.createStyle(color, 15)}/>
                    <div style={this.createStyle(color, 30)}/>
                    <div style={this.createStyle(color, 45)}/>
                    <div style={this.createStyle(color, 60)}/>
                </div>
            </>
        )
    }
}