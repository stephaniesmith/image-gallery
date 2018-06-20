import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import Albums from '../albums/Albums';
import NewAlbum from '../albums/NewAlbum';
import AlbumDetail from '../albums/AlbumDetail';
import About from '../about/About';
import Images from '../images/Images';
import NewImage from '../images/NewImage';
import Auth from '../auth/Auth';

import styles from './App.css';

class App extends Component {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      
      <Router>
        <div className={styles.app}>
          <Header/>
          <main>
            { checkedAuth &&
            <Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/albums/new" component={NewAlbum}/>
              <Route path="/albums/:id/images/thumbnail" component={AlbumDetail}/>
              <PrivateRoute path="/albums/:id/images/new" component={NewImage}/>
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
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);