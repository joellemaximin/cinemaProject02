import React, { Component } from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Product from './Product';
import PropTypes from 'prop-types';
import {Table, Button, Container} from 'react-bootstrap'

class AllProducts extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      error: null,
      isLoading: false
    }
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    let that = this;
    fetch('/products')
      .then(res => res.json())
      .then(products =>
       that.setState({products: products})
      );
    // .catch(error => console.log('erreurs me voilàà', error))
  }


  render() {
    console.log(this.state.products)

    return (
      // this.state.products.map((product)=>(
        <div>
          <h2>AllProd!ucts</h2>

          {this.state.products.map((product =>
            <div key={product.product_id} className="productList">
              <h2 className="productH2">{product.name}</h2>
              <h2 className="productH2">{product.price}</h2>
              <h2 className="productH2">{product.description}</h2>
              <h2 className="productH2">{product.product_date}</h2>
              <Button variant="info" to='/'>Afficher</Button>

            </div>
          ))}
          {/* <Product key={product.id} product={product} />      */}
        </div>

       

      // ))
                
    );
    

  }

}

AllProducts.protoTypes = {
  products: PropTypes.array.isRequired
}

export default AllProducts