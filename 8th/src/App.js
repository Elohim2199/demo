import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {vehicle:"cars"};
    }
    
    shouldComponentUpdate() {
        return true;
    }
    changeVehicle = () => {
        this.setState({vehicle:"ships"})
    }
    render() {
        return (
            <div>
                <p>I love {this.state.vehicle}</p>
                <button type="button" onClick={this.changeVehicle}>Change Vehicle</button>
            </div>
            )
    }
}

export default App;
