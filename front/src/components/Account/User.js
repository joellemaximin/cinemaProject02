import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
import {Label} from 'reactstrap'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

export default class User extends Component {
  render() {
    return (
        <Container>
          <h2>Créer un compte chez nous</h2>
            <Form className="forms">
              <Form.Group as={Row} className="mb-3 firstname">
                <Form.Label column sm="2">Prénom</Form.Label>
                <Col sm={10}>
                  <Form.Control
                  type='text'
                  className=''
                  onChange=''
                  name='firstname'
                  />
                </Col>
             
              </Form.Group>
              <br/>

              <Form.Group as={Row} className="mb-3 lastname">
                <Form.Label column sm="2">Nom de famille</Form.Label>
                <Col sm={10}>
                  <Form.Control
                  type='text'
                  className=''
                  onChange=''
                  name='lastname'
                  />
                </Col>
              </Form.Group>
              <br/>

              <Form.Group as={Row} className="mb-3 email">
                <Form.Label column sm="2">Email</Form.Label>
                <Col sm={10}>
                  <Form.Control
                  type='text'
                  className=''
                  onChange=''
                  name='email'
                  />
                </Col>
              </Form.Group>
              <br/>
              <Form.Group as={Row} className="mb-3 password">
                <Form.Label column sm="2">Password</Form.Label> 
                <Col sm={10}>
                  <Form.Control
                  type='text'
                  className=''
                  onChange=''
                  name='password'
                  />
                </Col>
              </Form.Group>
              <br/>
              <div>
                <Button size="lg" block>Créer un compte</Button>
                <small>
                  Déjà inscrit chez nous?
                  <p>Here</p>
                </small>
                
              </div>
            </Form>
      
        </Container>
    );
  }
}

