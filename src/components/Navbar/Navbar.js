import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./navbar.css";

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navbar">
      <Nav className="navbar__items" tabs>
        <NavItem>
          <NavLink href="/" className="navbar__link">
            Home
          </NavLink>
        </NavItem>
        <NavLink  >
          <Link to="/regional-map" className="navbar__link">
          Find Your Region
          </Link>
        </NavLink>
        <NavLink href="/about-us" className="navbar__link">
          About NYATEP
        </NavLink>
      </Nav>
    </div>
  );
};

export default Navbar;
