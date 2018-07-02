import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth, getUser } from '../auth/reducers';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import Albums from '../albums/Albums';
import NewAlbum from '../albums/NewAlbum';
import AlbumDetail from '../albums/AlbumDetail';
import About from '../about/About';
import Images from '../images/Images';
import Auth from '../auth/Auth';
import { logout } from '../auth/actions';

import styles from './App.css';

class App extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired,
    user: PropTypes.object
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { checkedAuth, user } = this.props;

    return (
      
      <Router>
        <div className={styles.app}>
          <Header/>
          <main>
            <nav>
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
            </nav>
            { checkedAuth &&
            <Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute path="/albums/new" component={NewAlbum}/>
              <Route path="/albums/:id/images/thumbnail" component={AlbumDetail}/>
              <Route path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Route path="/images" component={Images}/>
              <Redirect to="/"/>
            </Switch>
            }
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    checkedAuth: getCheckedAuth(state),
    user: getUser(state)
  }),
  { tryLoadUser, logout }
)(App);