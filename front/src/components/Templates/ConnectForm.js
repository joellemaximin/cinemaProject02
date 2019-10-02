import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

class ConnectForm extends Component{
  constructor(){
    super()
    this.state={
      openLogin: true, openRegister: false
    }
  }
  openLogin = () => {
    this.setState({openRegister: false, openLogin: true})
  }

  openRegister = () => {
    this.setState({openRegister: true, openLogin: false})
  }

  render() {
    return (
        <div id="container-main">
          <div className="title">
            <h2
            onClick={this.state.openLogin}
            >Login</h2>
          </div>
          <div className="title">
            <h2
            onClick={this.state.openRegister}
            >Register</h2>
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
  render() {
    return (
        <div id="container-main">
   
          <div className="showbox-container">
            <h3>Créer votre compte</h3>
          </div>
          <div>
         
          </div>
          
          <div className="sendIt">
            <button>Register</button>
          </div>
        </div>
    );
  }
}


class Login extends Component{
  render() {
    return (
        <div id="container-main">
          <div className="showbox-container">
            <h3>Se connecter</h3>
          </div>
          <div>
         
          </div>

          <div className="sendIt">
            <button>Login</button>
          </div>
        </div>
    );
  }
}


export default ConnectForm;