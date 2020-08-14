import React from 'react';
import Person from './Person/Person';
import { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        person:[
            { name: "Suyash", age: 21 },
            { name: "Andya", age: 22 },
            { name: "Aniket", age: 22 }
        ]
    }
    realNameHandler = (rname) => {
        this.setState(
            {
                person: [
                    { name: "Suyash", age: 21 },
                    { name: rname, age: 22 },
                    { name: "Aniket", age: 22 }
                ]
            }
        )

    }
    render() {
        return (
            <div className="App">
                <h1>Hello there!</h1>
                <h3>Here are top three students with their ages</h3>
                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age}
                    > CGPA=9.5
                    </Person>
                <Person
                    name={this.state.person[1].name}
                    age={this.state.person[1].age}
                    > CGPA=9.30
                    </Person>
                <Person
                    name={this.state.person[2].name}
                    age={this.state.person[2].age}
                    > CGPA=8.92
                    </Person>
                <button onClick={this.realNameHandler.bind(this, "Anirudha")}>Real Name</button>
            </div>
        );
    }
}

export default App;
