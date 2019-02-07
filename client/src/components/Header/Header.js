import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from './logo-no-icon.svg';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar variant="light" expand="lg" fixed="top" className="navbar__white">
        <Container className="navbar__container">
          <Navbar.Brand href="/">
            Oh hello.
            <span role="img" aria-label="waving hand">
              👋
            </span>
            Please ignore this awkward navbar Liz will fix but wanted to work on
            other stuff
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <img
              alt="spikeforest logo"
              src={logo}
              height="48"
              className="d-inline-block align-top navbar__logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar__right">
              <Nav.Link href="/recordings" className="navbar__link">
                Recordings
              </Nav.Link>
              <Nav.Link href="/algos" className="navbar__link">
                Algorithms
              </Nav.Link>
              <NavDropdown
                className="navbar__link"
                title="About"
                id="basic-nav-dropdown"
              >
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
                <NavDropdown.Item href="/about/contact">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
