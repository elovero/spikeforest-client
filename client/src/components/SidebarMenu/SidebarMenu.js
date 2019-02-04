import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/" className="styles.header__link">
          <img src={logo} className="styles.header__logo" alt="logo" />
        </NavLink>
        <div className="styles.menu">
          <p className="styles.menu__tagline">
            <Navlink to="/" className="styles.menu__link--inline">
              SpikeForest
            </Navlink>
            is a website for evaluating and comparing spike sorting algorithms
          </p>
          <div className="styles.menu__list">
            <NavLink
              className="styles.menu__link"
              to="/recordings"
              activeClassName="active"
            >
              Recordings
            </NavLink>
            <NavLink
              className="styles.menu__link"
              to="/algos"
              activeClassName="active"
            >
              Algorithms
            </NavLink>
            <NavLink
              className="styles.menu__link"
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
          </div>
        </div>
        <btn className="styles.menu__toggle">
          <span className="styles.menu__bars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </span>
        </btn>
        <btn className="styles.menu__toggle">
          <span className="styles.menu__x">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </btn>
      </header>
    );
  }
}
export default Header;
