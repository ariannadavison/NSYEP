import React, { useState } from "react";

import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import './navbar.css';

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navbar">
      <Nav className="navbar__items" tabs>
        <NavItem>
          <NavLink href="/" className="navbar__link">Home</NavLink>
        </NavItem>
        <NavLink href="/regionalmap" className="navbar__link">Find Your Region</NavLink>
        <NavLink href="/about-us" className="navbar__link">About NYATEP</NavLink>
      </Nav>
    </div>
  );
};

export default Navbar;
