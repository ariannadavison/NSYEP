import React, { useState } from "react";
import './navbar.css';
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
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Regions
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Find Your Region
              {/* href points to interative map */}
            </DropdownItem>
            <DropdownItem href="#">
              Region
            </DropdownItem><DropdownItem href="#">
              Region
            </DropdownItem><DropdownItem href="#">
              Region
            </DropdownItem><DropdownItem href="#">
              Region
            </DropdownItem><DropdownItem href="#">
              Region
            </DropdownItem><DropdownItem href="#">
              Region
            </DropdownItem><DropdownItem href="#">
              Region
            </DropdownItem><DropdownItem href="#">
              Region
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Get in Touch with NSYEP Sites</NavLink>
          {/* Links to <Contact /> */}
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navbar;
