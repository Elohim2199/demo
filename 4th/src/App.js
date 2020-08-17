import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.brand = "ferrari";
        this.state = {color:'red', ty:'2-seater'}
    }
    present() {
        return this.state.color + ' coloured and ' + this.state.ty ;
    }
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <p>I have a {this.brand} which is {this.present()} </p>
            </div>
        );
    }
}
class App2 extends App {
    render() {
        return (
            <div>
                <App />
                <p>I park it in Garage</p>
            </div>
            )
    }
}

export default App2;