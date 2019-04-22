import React, { Component } from 'react';

class Todo extends Component {
  
    render() {
      return (
        <div>
          <li>
            <div>
              <input type='checkbox'></input>
              <textarea>{this.props.todo.text}</textarea>
            </div>
          </li>
        </div>
      );
    }
  }

export default Todo;