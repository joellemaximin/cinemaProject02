import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Films from './components/Films/Allfilm';
import Account from './components/Account/User';
import Movie from '../../src/components/Films/Movie';

export default class App extends Component {
  render() {
    return (
    
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/all-movies" component={Films} />
        <Route path="/movie" component={Movie} />
        <Route path="/users/account" component={Account} />
        </div>
      </Router>
    );
  }
}

