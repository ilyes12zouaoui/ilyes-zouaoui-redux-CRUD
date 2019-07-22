import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark sticky-top">
      <NavLink className="navbar-brand" to="/">
        Zouaoui Ilyes MERN Stack
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul> */}
        <ul class="navbar-nav ml-auto">
          {/* always showen navigation */}
          <li class="nav-item">
            <NavLink className="nav-link" to="/">
              home
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              aaaa{" "}
            </a>
            <div
              class="dropdown-menu dropdown-menu-right "
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink
                className="dropdown-item"
                activeClassName=""
                to="/profile"
              >
                profile
              </NavLink>

              <NavLink
                className="dropdown-item"
                activeClassName=""
                to="/updatePassword"
              >
                update password
              </NavLink>
              <NavLink
                className="dropdown-item"
                activeClassName=""
                to="/updateProfile"
              >
                update profile
              </NavLink>
              <NavLink
                className="dropdown-item"
                activeClassName=""
                to="/"
                exact
              >
                logout
              </NavLink>
              {/* <NavLink className="dropdown-item" to="/">
                      profile
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      onClick={this.props.logoutMethod}
                      to="/"
                      exact
                    >
                      logout
                    </NavLink> */}
            </div>
          </li>

          {/* if user is authenticated navigation  */}

          {/* if user is not authenticated navigation  */}
          <React.Fragment>
            <li class="nav-item">
              <NavLink className="nav-link" to="/signIn">
                signIn
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/signUp">
                signUp
              </NavLink>
            </li>
          </React.Fragment>
        </ul>
      </div>
    </nav>
  );
};
