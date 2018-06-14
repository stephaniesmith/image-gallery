import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Header/>
          <main>
            Hello World
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}