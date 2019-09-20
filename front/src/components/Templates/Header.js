import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
        <nav id="header">
            <ul id="listNavbar">
                <NavLink className="currentHeader" activeClassName="active" to="/" >
                    <li className="linkHeader">
                        <h5>Home</h5>
                    </li>
                </NavLink>
                <NavLink className="currentHeader" activeClassName="" to="/all-products" >
                    <li className="linkHeader">
                        <h5>Produits</h5>
                    </li>
                </NavLink>
                <NavLink className="currentHeader" activeClassName="" to="/users/account" >
                    <li className="linkHeader">
                        <h5>Account</h5>
                    </li>
                </NavLink>

            </ul>
        </nav>
    );
  }
}

