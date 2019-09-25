import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


export default class User extends Component {
  constructor(props){
    super(props);

    this.state = {
      

    }
  }




  



  render() {

    return (
      <Container>
        <h2>Hello {this.props.firstname}</h2>
     
    
      </Container>
    );
  }
}

