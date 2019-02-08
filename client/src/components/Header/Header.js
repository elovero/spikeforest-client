import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from './logo-no-icon.svg';
import { slide as Menu } from 'react-burger-menu';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <Nav className="justify-content-center navbar__white">
        <Navbar.Brand href="/">
          <img
            alt="spikeforest logo"
            src={logo}
            height="48"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Nav>
    );
  }
}
export default Header;
