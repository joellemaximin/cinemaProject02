import React, { Component } from 'react';
import {Container, Button, Form, Row, Col} from 'react-bootstrap'
// import {Link} from 'reactstrap'
import { Link } from 'react-router-dom'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
const emailRegx = RegExp(/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/);

const formulaireValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val=> {
    val.length > 0 && (valid = false)
  })
  return valid;
}

export default class User extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }

    }
    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }




  handleChange = e =>{
    e.preventDefault();

    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    // console.log("Name:", name, value)
    switch (name) {
      case "firstname":
        formErrors.firstname = 
          value.length < 3 ? "Minimum 3 caractères est obligatoire" : "";
        break;
      case "lastname":
        formErrors.lastname = 
          value.length < 3 ? "Minimum 3 caractères est obligatoire" : "";
        break;
      case "email":
        formErrors.email = 
          emailRegx.test(value) ? "" : "Invalid email adress";
        break;
        case "password":
          formErrors.password = 
            value.length < 6   ? "Minimum 6 caractères est obligatoire" : "";
          break;
        
          default:
          break;

    }
    this.setState({formErrors, [name]: value})
    //    this.setState({formErrors, [name]: value}, ()=> console.log(this.state))

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    
    if(formulaireValid(this.state.formErrors)){
      console.log(`
      BIEN ENVOYER
        prenom: ${this.state.firstname}
        nom: ${this.state.lastname}
        email: ${this.state.email}
        password: ${this.state.password}

      `);

    } else {
      console.error('form invalid, display error message')
    }

    // var there = this;
    // fetch("/login", {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/Json' },
    //   // body: JSON.stringify(this.state)
    // }).then(function (res) {
    //   if (res.status === 201) {
    //       return res.text();
    //   }
    // }).then(function (res) {
    //   if (res) {
    //     there.setState({ password: res })
    //     localStorage.setItem('password', there.state.password);
    //     window.location.reload();
    //   }
    // }).catch(function (err) {
    //     console.log(err);
    // });
  }



  render() {
    const { formErrors } = this.state;

    return (
      <Container>
        <h2>Créer un compte chez nous</h2>
          <form onSubmit={this.handleSubmit} className="forms">
            <Form.Group as={Row} className="mb-3 firstname">
              <Form.Label column sm="2">Prénom</Form.Label>
              <Col sm={10}>
                <Form.Control
                type='text'
                className={formErrors.firstname.length > 0 ? "error" : null}
                name='firstname'
                
                // value={this.state.firstname}
                onChange={this.handleChange}

                />
                {formErrors.firstname.length > 0 && (
                  <span className="errorMsg">{formErrors.firstname}</span>
                )}
              </Col>
            
            </Form.Group>
            <br/>

            <Form.Group as={Row} className="mb-3 lastname">
              <Form.Label column sm="2">Nom de famille</Form.Label>
              <Col sm={10}>
                <Form.Control
                type='text'
                className={formErrors.lastname.length > 0 ? "error" : null}
                name='lastname'
                
                // value={this.state.lastname}
                onChange={this.handleChange}
                />
                {formErrors.lastname.length > 0 && (
                  <span className="errorMsg">{formErrors.lastname}</span>
                )}
              </Col>
            </Form.Group>
            <br/>

            <Form.Group as={Row} className="mb-3 email">
              <Form.Label column sm="2">Email</Form.Label>
              <Col sm={10}>
                <Form.Control
                type='email'
                className={formErrors.email.length > 0 ? "error" : null}
                name='email'
                
                // value={this.state.email}
                onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMsg">{formErrors.email}</span>
                )}
              </Col>
            </Form.Group>
            <br/>
            <Form.Group as={Row} className="mb-3 password">
              <Form.Label column sm="2">Password</Form.Label> 
              <Col sm={10}>
                <Form.Control
                type='password'
                className={formErrors.password.length > 0 ? "error" : null}
                name='password'
                
                // value={this.state.password}
                onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMsg">{formErrors.password}</span>
                )}
              </Col>
            </Form.Group>
            <br/>
            <div>
               <Link to='/account/profile'><Button size="lg" type="submit" 
               >Créer un compte</Button></Link>
              <small>
                Déjà inscrit chez nous?
                {/* <Link to='/user/signin'>Here</Link> */}
              </small>
              
            </div>
          </form>
    
      </Container>
    );
  }
}

