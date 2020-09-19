import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyles } from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyles>
      Header!
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
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
