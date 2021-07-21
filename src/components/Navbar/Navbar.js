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
        {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="navbar__link" nav caret> */}
            
          {/* </DropdownToggle> */}
          {/* <DropdownMenu> */}
            {/* <DropdownItem href="#">Find Your Region */}
            {/* href points to interactive map */}
            {/* </DropdownItem> */}

            {/* {regions.map(r => <Link to={`/${r.regionURL}`} key={r.regionID}><DropdownItem>{r.region}</DropdownItem></Link>)} */}

          {/* </DropdownMenu> */}
        {/* </Dropdown> */}
        {/* <NavItem>
          <NavLink>
            <Link to="/contact" className="navbar__link">Get in Touch with NSYEP Sites</Link>
          </NavLink>
        </NavItem> */}
      </Nav>
    </div>
  );
};

export default Navbar;
