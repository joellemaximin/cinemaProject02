import React, { Component } from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';

export default class Home extends Component {
  render() {
    return (
        <div>
            <Header/>
            <h2>HOME</h2>
            <Footer/>
        </div>
    );
  }
}

