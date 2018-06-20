import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from './FormControl';

export default class Credentials extends Component {

  static propTypes = { 
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    allowName: PropTypes.bool
  };

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  };

  render() {
    const { action, allowName = false } = this.props;
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        { allowName &&
          <FormControl label="name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>
        }
        <FormControl label="email">
          <input name="email" value={email} onChange={this.handleChange}/>
        </FormControl>
        <FormControl label="password">
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
        </FormControl>
        <FormControl label="password">
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}