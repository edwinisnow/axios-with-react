import React, { Component } from 'react';
import axios from 'axios';

export default class PersonInput extends Component {
  state = {
    name: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name
    };
    axios
      .post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
        console.log('Log: -----> : PersonInput -> res', res);
        console.log('Log: -----> : PersonInput -> res.data', res.data);
      });
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person name:{' '}
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
