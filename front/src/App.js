import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/AllProducts';
import Account from './components/Account/User';
import Product from './components/Products/Product';
import Profile from './components/Account/Profile';

import {Table, Button, Container} from 'react-bootstrap'

class App extends Component {
  state = {
    products: []
  }



  render() {

    return (
    
      <div>
        {/* <Button onClick={this.toggle}>Ajouter un produit</Button> */}

        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/all-products" component={Products} />
          <Route path="/product" component={Product} />
          <Route path="/users/register" component={Account} />
          <Route path="/account/profile" component={Profile} />

        </Router>
       
       {/* <Products products={this.state.products}/> */}

      </div>
    );
  }
}

export default App;