import React, { Component } from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Table, Button, Container, FromGroup} from 'react-bootstrap'
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      error: null,
      isLoading: false,
      show: false,
      setShow: false,
      newProductData: {
        name: '',
        image: '',
        disponible: ''
      },
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  productStyle = () => {
    return {
      padding: '15px',
      color: this.state.newProductData.disponible ? 'blue' : 'none'
    }
  }
  
  newProductToggle(){
    this.setState({
      
    })
  }
  render() {
    return (
       <div>
          <Container>
            <Card style={this.productStyle()}>
              <CardImg top width="100%"></CardImg>
              <CardBody>
                {/* <CardTitle>{this.props.product.name}</CardTitle>
                <CardText>{this.props.product.disponible}</CardText> */}
                  <Button variant="info">Modifier</Button>
                  <Button variant="danger">Supprimer</Button>
              </CardBody>
            </Card>
   
          
          </Container>
       </div>
    );
  }
}

Product.protoTypes = {
  product: PropTypes.object.isRequired
}

export default Product

