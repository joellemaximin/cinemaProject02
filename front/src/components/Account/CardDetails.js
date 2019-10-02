import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


export default class CardDetails extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    before = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
       const { values, handleStep } = this.props;
    //    this.props.values;
        return (
            <Container>
                <h2>Ajouter votre compte en banque</h2>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Banque </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="5 avenue des champs"
                        onChange={handleStep('bankAccount')}
                        defaultValue={values.bankAccount}
                        />
                        
                    </Form.Group>

        
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

                </Form>
    
            </Container>
         
        );
    }
}
