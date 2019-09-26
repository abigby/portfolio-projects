import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <span className="nav-logo">
          <Link to="/" className="nav-logo-link">
            User-Mania
          </Link>
        </span>
      </header>
    );
  }
}
