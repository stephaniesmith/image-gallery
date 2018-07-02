import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import hero from '../app/hero.jpg';

import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    // logout: PropTypes.func.isRequired
  };

  // handleLogout = () => {
  //   this.props.logout();
  // };

  render() {
    const { user } = this.props;

    return (
      <header className={styles.header}>
        <img src={hero}/>
        <h1>SnapShot</h1>
        { user && <span>Hello {user.name}!</span> }

        {/* <nav>
          <Link to="/albums">Albums</Link>
            &nbsp;
          <Link to="/about">About</Link>
            &nbsp;
          <Link to="/images">Images</Link>
            &nbsp;
          {
            user
              ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
              : <Link to="/auth">Login</Link>
          }
        </nav> */}
      </header>
    );
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  // { logout }
  null
)(Header);