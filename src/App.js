import React, { Component } from 'react';
import './App.css';
import TodoList from './container/TodoList';

class App extends Component {
  render() {
    return (
     <div className="App">
      <h1 className="m-title">TODO LIST</h1>
      <div className="g-bd">
       <TodoList/>
      </div>
      <div className="g-ft"></div>
     </div>
    );
  }
}

export default App;
