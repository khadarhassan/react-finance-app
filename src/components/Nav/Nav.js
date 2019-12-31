import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.svg';

const Nav = () => {
  return (
    <nav
      className="navbar is-spaced is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} width="112" alt="" height="28" />
        </a>
        <button
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href=""
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            exact
            to="/"
            activeClassName="is-active"
            className="navbar-item"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/dashboard"
            activeClassName="is-active"
            className="navbar-item"
          >
            Dasboard
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink
                exact
                to="/signup"
                activeClassName="is-active"
                className="button is-primary"
              >
                <strong>Sign up</strong>
              </NavLink>
              <NavLink
                exact
                to="/login"
                activeClassName="is-active"
                className="button is-light"
              >
                <strong>Login</strong>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
