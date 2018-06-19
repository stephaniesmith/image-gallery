import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  }

  render() {
    const { action, allowName = false } this.props;
    const { name, email, password } = this.state;

    return (
      <div>
        
      </div>
    );
  }
}