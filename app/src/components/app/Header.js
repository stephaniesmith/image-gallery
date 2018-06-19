import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';

import styles from './Header.css';

export default class Footer extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav>
          <ul>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/pets">Pets</Link>
          &nbsp;
          {
            user
              ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
              : <Link to="/auth">Login</Link>
          }


            <li><a href="/albums">
              Albums</a></li>
            <li><a href="/about">
              About</a></li>
            <li><a href="/images">
              Images</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}