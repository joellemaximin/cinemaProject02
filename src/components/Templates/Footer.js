import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
        <nav id="Footer">
            <ul id="Navbar">
                <NavLink className="currentFooter" activeClassName="active" to="/" >
                    <li className="linkFooter">
                        <h5>Home</h5>
                    </li>
                </NavLink>
                <NavLink className="currentFooter" activeClassName="active" to="/" >
                    <li className="linkFooter">
                        <h5>A voir</h5>
                    </li>
                </NavLink>
                <NavLink className="currentFooter" activeClassName="active" to="/" >
                    <li className="linkFooter">
                        <h5>Cinémas</h5>
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
  }
}
