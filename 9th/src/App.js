import React from 'react';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 3000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Earlier the favorite colour was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "Now the favorite colour is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

export default App;
