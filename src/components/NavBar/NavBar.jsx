import React, { useState } from 'react';
import "./NavBar.css"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="NavBar">
        <NavbarBrand href="/">Front End Capstone | Botanify</NavbarBrand>
        <NavbarToggler onClick={toggle} > <div class="burger"></div>
<div class="burger"></div>
<div class="burger"></div> </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/plants">Plant Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/wtrSchedule">Watering Schedule</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/fertSchedule">Fertilization Schedule</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/chat">Chat</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/"
                onClick={() => {
                    localStorage.removeItem("botanify_user")
                }}>
                <strong>Logout</strong>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}