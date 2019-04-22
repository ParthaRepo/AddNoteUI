import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const todoList = [{text:'Prepare breakfast'}, 
    {text:'Pack Lunch'},
    {text: 'Attend standup'},
    {text: 'Check for pending bills'}];
    this.state = {
      todos: todoList,
    }
  }

  addTodo() {
    const text = prompt ('Please enter your todo text');
    this.setState = ({
      todos: [...this.state.todos, {text: text}],
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={()=>this.addTodo()}>Add note</button>
        <ul>
          {this.state.todos.map((todo, index) => <Todo key={index} todo={todo} />)}
        </ul>
      </div>
    );
  }
}


export default App;
