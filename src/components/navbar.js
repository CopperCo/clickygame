import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Thenavbar extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Clicky Game</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">Score</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Wins:</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Losses:</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
