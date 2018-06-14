import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Albums from '../albums/Albums';
import About from '../about/About';
import Images from '../images/Images';

export default class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route path="/albums" component={Albums}/>
              <Route path="/about" component={About}/>
              <Route path="/images" component={Images}/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}