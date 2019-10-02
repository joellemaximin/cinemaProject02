import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


export default class FormDetails extends Component {
    constructor(props){
        super(props);

        this.state = {


        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    

    render() {
       const { values, handleStep } = this.props;
    //    this.props.values;
    return (
      <Container>
        <h2>Formulaire</h2>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Votre adresse </Form.Label>
                <Form.Control 
                type="text" 
                name='adress'
                placeholder="5 avenue des champs"
                onChange={handleStep('adress')}
                defaultValue={values.adress}
                />
                <Form.Label>Votre code postale </Form.Label>

                <Form.Control 
                type="text"
                name='code_postale'
                placeholder="91 000"
                onChange={handleStep('code_postale')}
                defaultValue={values.code_postale}

                />

       
                <Form.Label>Numéro téléphone</Form.Label>

                <Form.Control 
                type="number" 
                placeholder="05779875"
                name='number'
                onChange={handleStep('number')}
                defaultValue={values.number}

                />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Villes</Form.Label>
                <Form.Control as="select"
                type="text" 
                name='ville'
                placeholder="France"
                onChange={handleStep('ville')}
                defaultValue={values.ville}
                >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
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

