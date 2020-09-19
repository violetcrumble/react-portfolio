import React from "react";
import { Link } from "react-router-dom";
import { FooterStyles } from "./Footer.styled";

export default function Footer() {
  return (
    <FooterStyles>
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
    </FooterStyles>
  );
}
