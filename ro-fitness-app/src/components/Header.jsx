import React from "react";
import logo from "../images/ro-fitness-logo.png";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = () => (
  <header>
    <Navbar
      fixed="top"
      color="light"
      light
      expand="xs"
      className="border-bottom border-gray bg-white"
      style={{ height: 80 }}
    >
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
          <Col className="d-xs-flex d-sm-flex justify-content-start text-center">
            <Nav className="mrx-auto" navbar>
              <UncontrolledDropdown className="d-flex text-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>
                  MENU
                </DropdownToggle>
                <DropdownMenu center>
                  <DropdownItem
                    className="font-weight-bold text-secondary text-uppercase justify-content-center"
                    header
                    disabled
                  >
                    Rō FITNESS
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="/blah" class="text-align-center">
                    Today's Workout
                  </DropdownItem>
                  <DropdownItem href="#" class="text-center">
                    Profile
                  </DropdownItem>
                  <DropdownItem href="#">Training Log</DropdownItem>
                  <DropdownItem href="#">Personal Records</DropdownItem>
                  <DropdownItem href="#">Speed Wall</DropdownItem>
                  <DropdownItem href="#">Concept2 Logbook</DropdownItem>
                  <DropdownItem href="#">Log Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Col>

          <Col className="">
            <NavbarBrand className=" p-0" href="/" style={{ width: 10 }}>
              <img
                src={logo}
                alt="logo"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />
            </NavbarBrand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
