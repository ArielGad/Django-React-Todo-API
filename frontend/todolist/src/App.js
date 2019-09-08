import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';


class App extends Component {

    state = {
        todos: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const todos = await res.json();
            this.setState({
                todos
            });
        } catch (e) {
            console.log(e);
        }
    }

    render(){

         return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos}/>
      </div>
    );
    }
}
export default App;
