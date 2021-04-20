import React, { useState } from "react";
import './navbar.css';
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

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavbarBrand href="/">BRAND</NavbarBrand>
        </NavItem>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Regions
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Find Your Region
            {/* href points to interactive map */}
            </DropdownItem>

            {regions.map(r => <Link to={`/${r.regionURL}`} key={r.regionID}><DropdownItem>{r.region}</DropdownItem></Link>)}

          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/contact">Get in Touch with NSYEP Sites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
