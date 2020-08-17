import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {name:"Aniket", adj:"The great"}
    }
    static getDerivedStateFromProps(props, state) {
        return { name:props.name }
    }
    componentDidMount() {
        setTimeout(()=> this.setState({ name: "Suya", adj: "The legend" }), 3000)
    }

    render() {
        return (
            <h2> {this.state.name} {this.state.adj}</h2>
            )
    }
}

export default App;
