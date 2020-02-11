import React, { Component } from 'react';
import './App.css';

import TodoList from './Components/TodoList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import TodoForm from './Components/TodoForm';
import Modal from './Components/Modal';

const navStyle = {
  color: 'white'
}
class App extends Component {
  state = {
    showModal: false
  }
  
  toggleTask = (id) => {
    const newTodos = this.state.todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }

      return item
    })

    this.setState({ todos: newTodos })

  }

  onSubmitHandler = (title, event) => {
    event.preventDefault();
    const todo = { id: title, title: title, isCompleted: false }
    this.setState({ todos: this.state && this.state.todos ? [...this.state.todos, todo] : [todo] })
  }

  onModalClose = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="App">

        <Router>
          <nav>
            <ul className="nav-links">
              <Link style={navStyle} to='/todos'>
                <li>Todos</li>
              </Link>
              <Link style={navStyle} to='/about-us'>
                <li>About Us</li>
              </Link>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/about-us' >
              <div>About us</div>
            </Route>
            <Route exact path='/todos' >
              <button onClick={this.showModal}>Add Todo </button>
              {this.state.showModal ? <Modal onClose={this.onModalClose}><TodoForm onSubmitHandler={this.onSubmitHandler} /></Modal> : null}
              {<TodoList todos={this.state.todos} toggleTask={this.toggleTask} />}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
