import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            React.createElement('div', null, React.createElement('h1', null, 'Hello there!'), React.createElement('p', null, 'This is created using "createElement()" function'))
            )
    }
}

export default App;
