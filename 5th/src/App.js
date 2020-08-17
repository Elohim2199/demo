import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
    
    render() {
        return <h5> form {this.props.info.name} {this.props.info.Rollno }</h5>;
    }
}
class App extends App2 {
    
    render() {
        
        const myinfo = { name: "Suyash", Rollno: 50 }
        return (
            <div>
            <h2>Hello! </h2>
            <App2 info={myinfo} />
            </div>
            )
    }
}
export default App;
