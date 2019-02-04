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

// <header class="blog-header py-3">
//   <div class="row flex-nowrap justify-content-between align-items-center">
//     <div class="col-4 pt-1">
//       <a class="text-muted" href="#">
//         Subscribe
//       </a>
//     </div>
//     <div class="col-4 text-center">
//       <a class="blog-header-logo text-dark" href="#">
//         Large
//       </a>
//     </div>
//     <div class="col-4 d-flex justify-content-end align-items-center">
//       <a class="text-muted" href="#">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="mx-3"
//           focusable="false"
//           role="img"
//         >
//           <title>Search</title>
//           <circle cx="10.5" cy="10.5" r="7.5" />
//           <line x1="21" y1="21" x2="15.8" y2="15.8" />
//         </svg>
//       </a>
//       <a class="btn btn-sm btn-outline-secondary" href="#">
//         Sign up
//       </a>
//     </div>
//   </div>
// </header>;
