import React, { Component } from 'react';
import {Container, Button, ListGroup, Row, Col} from 'react-bootstrap'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


export default class ConfirmForm extends Component {
   
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    before = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
    const { values: {adress, code_postale, ville,number, bankAccount }}= this.props
        return (
        <Container>
            <h2>Ajouter card details</h2>
            <ListGroup>
                <ListGroup.Item
                >{adress}</ListGroup.Item>

                <ListGroup.Item
                >{code_postale}</ListGroup.Item>

                <ListGroup.Item
                >{ville}</ListGroup.Item>

                <ListGroup.Item
                >{number}</ListGroup.Item>

                <ListGroup.Item
                >{bankAccount}</ListGroup.Item>

                
            </ListGroup>
            <Button
            // style={style.button}
            onClick={this.before}
            >
                Avant
            </Button>
            
            <Button
            // style={style.button}
            onClick={this.continue}
            >
                Continue
            </Button>
        </Container>
    )
        
    
  }
}

