import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo-no-icon.svg';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img
            alt="spikeforest logo"
            src={logo}
            height="48"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/recordings">Recordings</Nav.Link>
            <Nav.Link href="/algos">Algorithms</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about/background">
                Background
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/platformdata">
                Platform Data
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/contributors">
                Contributors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
