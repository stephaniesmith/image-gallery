import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { getUser } from './reducers';

class Auth extends Component {
  static propTypes = {
    user: PropTypes.object,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    location: PropTypes.object
  };

  render() {
    const { user, signin, signup, location } = this.props;
    const redirect = location.state ? loaction.state.from : '/';
    if(user) return <Redirect to={redirect}/>;
    return (
      <div>
        <Switch>
          
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { signup, signin }
)(Auth);