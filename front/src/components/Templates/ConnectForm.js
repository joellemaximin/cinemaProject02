import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Connectform.css'

class ConnectForm extends Component{
  constructor(){
    super()
    this.state={
      openLogin: true, openRegister: false
    }
  }
  openLogin() {
    this.setState({openRegister: false, openLogin: true})
  }

  openRegister() {
    this.setState({openRegister: true, openLogin: false})
  }

  render() {
    return (
        <div id="container-main">
          <div className="header">
            <div className="title">
              <h2
              onClick={this.openLogin.bind(this)}
              >Login</h2>
            </div>
            <div className="title">
              <h2
              onClick={this.openRegister.bind(this)}
              >Register</h2>
            </div>
          </div>
          

          <div className="box-container">
            {this.state.openLogin && <Login/>}
            {this.state.openRegister && <Register/>}

          </div>
        </div>
    );
  }
}

class Register extends Component{ 
  constructor(){
    super()
    this.state= {

    }
  }
     
  sumbit= e => {
    e.preventDefault();
    console.log("Envoyé")
  }
  render() {

    return (
        <div id="container-main">
   
          <div className="showbox-container">
            <h3>Créer votre compte</h3>
          </div>
          <div>
            <input
             placeholder='Lastname'
             type='text'
             handle={this.handleText}
            />
            <input
             placeholder='Firstname'
             type='text'
             handle={this.handleText}
            />
            <input
             placeholder='Email'
             type='email'
             handle={this.handleText}
            />
            <input
             placeholder='Password'
             type='password'
             handle={this.handleText}
            />

            <button onSubmit={this.submit}>Register</button>
          </div>
          
         
        </div>
    );
  }
}


class Login extends Component{
  constructor(){
    super()
    this.state= {

    }
  }

  logIn= e => {
    e.preventDefault();
    console.log("Envoyé")
  }

  render() {
    return (
        <div id="container-main">
          <div className="showbox-container">
            <h3>Se connecter</h3>
          </div>
          <div>
            <input
             placeholder='Email'
             type='email'
             handle={this.handleText}
            />
            
            <input
             placeholder='Password'
             type='password'
             handle={this.handleText}
            />

            <button onSubmit={this.logIn}>Log In</button>
          
          </div>

        </div>
    );
  }
}


export default ConnectForm;