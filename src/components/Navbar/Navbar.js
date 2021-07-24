import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  NavbarBrand
} from "reactstrap";
import { regions } from '../../data/Regions';
import './navbar.css';

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navbar">
      <Nav className="navbar__items" tabs>
        {/* <NavItem>
          <NavbarBrand href="/" className="navbar__link">BRAND</NavbarBrand>
        </NavItem> */}
        <NavItem>
          <NavLink href="/" className="navbar__link">Home</NavLink>
        </NavItem>
          <NavLink href="/regions" className="navbar__link">Find Your Region</NavLink>
      </Nav>
    </div>
  );
};

export default Navbar;
