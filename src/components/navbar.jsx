import React, { Component } from "react";

//Stateless Functional component
/**
 * This type of components can be used where there is no need of state changes inside a component.
 */
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
