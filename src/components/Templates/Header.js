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
                <NavLink className="currentHeader" activeClassName="active" to="/" >
                    <li className="linkHeader">
                        <h5>A voir</h5>
                    </li>
                </NavLink>
                <NavLink className="currentHeader" activeClassName="active" to="/" >
                    <li className="linkHeader">
                        <h5>Cinémas</h5>
                    </li>
                </NavLink>
                <form id="formsearch">
                    <input type="text" id="input-form"/>
                    <button id="submitB" type="submit">Search</button>
                </form>
                <NavLink className="currentHeader" activeClassName="active" to="/" >
                    <li className=" ">
                        <h5>Connexion</h5>
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
  }
}

