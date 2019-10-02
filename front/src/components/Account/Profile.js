import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
import FormDetails from './FormDetails';
import CardDetails from './CardDetails'
import ConfirmForm from './ConfirmForm'
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


export default class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
        step: 1,
        adress: '',
        code_postale: '',
        ville: '',
        number: '',
        description: '',
        bankAccount: ''

        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }


    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step -1
        })
    }

    handleStep = input=> e => {
        this.setState({[input]: e.target.value});
    }

    

   render() {
       const { step } = this.state;
       const  {adress, code_postale, ville,number, bankAccount
       } = this.state;

       const values = {adress, code_postale, ville,number, bankAccount
       }

    switch(step) {
        case 1:
            return (
            <Container>            
                <FormDetails
                    nextStep = {this.nextStep}
                    handleStep = {this.handleStep}
                    values= {values}
                />
            
            </Container>
            );
        case 2: 
            return (
                <Container>
                    <h2>Ajouter card details</h2>
                    <CardDetails
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleStep = {this.handleStep}
                        values= {values}
                    />
                </Container>
            )
        case 3: 
            return (
                <Container>
                    <ConfirmForm
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        values= {values}
                    />
                </Container>
            )
        case 4: 
            return (
                <Container>
                    <h2>Bien enregister</h2>
                </Container>
            )
    }
  }
}

