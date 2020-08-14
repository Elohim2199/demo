import React from 'react';
import Person from './Person/Person';
import { Component } from 'react';
import './App.css';

const FunctionalApp = () => {

const [person, setPerson] = React.useState([
            { name: "Suyash", age: 21 },
            { name: "Ananda", age: 22 },
            { name: "Aniket", age: 22 }
        ]);

    
const    realNameHandler = (rname) => {
        setPerson(
            {
                person: [
                    { name: "Suyash", age: 21 },
                    { name: rname, age: 22 },
                    { name: "Aniket", age: 22 }
                ]
            }
        )

    };
    
        return (
            <div className="App">
                <h1>Hello there!</h1>
                <h3>Here are top three students with their ages</h3>
                <Person
                    name={person[0]}
                    age={person[0]}
                    > CGPA=9.5
                    </Person>
                <Person
                    name={person[1]}
                    age={person[1]}
                    > CGPA=9.30
                    </Person>
                <Person
                    name={person[2]}
                    age={person[2]}
                    > CGPA=8.92
                    </Person>
                <button onClick={realNameHandler( "Anirudha")}>Real Name</button>
            </div>
        );
    
}

export default FunctionalApp;
