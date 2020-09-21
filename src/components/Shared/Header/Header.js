import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyles } from "./Header.styled";

import logo from "./images/logo.gif";

export default function Header() {
  return (
    <HeaderStyles>
      <Link to="/">
        <img
          src={logo}
          alt="Bonnie Mellott - Interactive Media Design"
          className="logo"
        />
      </Link>
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </HeaderStyles>
  );
}
