import React, { Component } from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import $ from 'jquery';
import {Table, Button, Container} from 'react-bootstrap'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      error: null,
      isLoading: false
    }
  }

  // componentWillMount(){
  //   fetch.get('http://localhost:3000/all-products').then((response)=>{
  //     this.setState({
  //       products: response.data        
  //     })
  //   })
  // }

  
  // componentDidMount(){
  //   this.getMovies();
  // }
  
  // getMovies(){
  //   let that = this;
  //   fetch('')
  //   .then(response => response.json())
  //   .then(data => that.setState({
  //     movies: data
  //   },
  //   console.log(data)))
  //   .catch(error => this.setState({ error }));
  // }  
  


  render() {


    // console.log(resultsAll, 'okkk')
    return (
      <div>
        <Header/>
        <h3>Liste des produits</h3>

      </div>
    );
  }
}
export default Home;
