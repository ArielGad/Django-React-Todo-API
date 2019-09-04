import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const list = [
    {
        "id": 1,
        "title": "Eat",
        "description": "need to eat food"
    },
    {
        "id": 2,
        "title": "Drink",
        "description": "need to drink watet"
    }
];


class App extends Component {

    constructor(props) {
    super(props);
    this.state = { list };
    }

    render(){

        return(
        <div>
            {this.state.list.map(item => (
                <div>
                    <h1><span>{item.id}</span> {item.title}</h1>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
        );
    }
}

export default App;
