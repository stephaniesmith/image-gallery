import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Albums from '../albums/Albums';
import NewAlbum from '../albums/NewAlbum';
import About from '../about/About';
import Images from '../images/Images';

import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      
      <Router>
        <div className={styles.app}>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Albums}/>
              <Route path="/albums/new" component={NewAlbum}/>
              <Route path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Route path="/images" component={Images}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}