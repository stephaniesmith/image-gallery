import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from './Header';
import Albums from '../albums/Albums';
import NewAlbum from '../albums/NewAlbum';
import AlbumDetail from '../albums/AlbumDetail';
import About from '../about/About';
import Images from '../images/Images';
import NewImage from '../images/NewImage';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className={styles.app}>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/albums/new" component={NewAlbum}/>
              <Route path="/albums/:id/images/thumbnail" component={AlbumDetail}/>
              <Route path="/albums/:id/images/new" component={NewImage}/>
              <Route path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Route path="/images" component={Images}/>
              <Redirect to="/"/>
            </Switch>
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