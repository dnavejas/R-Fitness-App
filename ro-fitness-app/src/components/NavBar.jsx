import React, { Component } from "react";
import logo from "../images/ro-fitness-logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

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

import "../App.css";

class Header extends Component {
  render() {
    return (
      <header className="position-relative">
        <Router>
          <Navbar
            color="light"
            light
            expand="xs"
            className="border-bottom border-gray bg-white"
            style={{ height: 80 }}
          >
            <Container>
              <Row
                noGutters
                className="position-relative w-100 align-items-center"
              >
                <Col className="d-xs-flex d-sm-flex justify-content-start text-center">
                  <Nav className="mrx-auto" navbar>
                    <UncontrolledDropdown
                      className="d-flex text-center"
                      nav
                      inNavbar
                    >
                      <DropdownToggle className="font-weight-bold" nav caret>
                        MENU
                      </DropdownToggle>
                      <DropdownMenu center="true">
                        <DropdownItem
                          className="font-weight-bold text-secondary text-uppercase justify-content-center text-center"
                          header
                          disabled
                        >
                          <Link to={"/Welcome"} className="nav-link">
                            Rō FITNESS
                          </Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className="text-center ">
                          <Link to={"/"} className="nav-link">
                            Today's Workout
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="text-center ">
                          <Link to={"/Profile"} className="nav-link">
                            Profile
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="text-center ">
                          <Link to={"/"} className="nav-link">
                            Training Log
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="text-center ">
                          <Link to={"/"} className="nav-link">
                            Personal Records
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="text-center ">
                          <Link to={"/"} className="nav-link">
                            Speed Wall
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="text-center ">
                          <Link to={"/"} className="nav-link">
                            Concept2 Logbook
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="text-center nav-link">
                          <Link to={"/"} className="nav-link">
                            Log Out
                          </Link>
                        </DropdownItem>
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
        </Router>
      </header>
    );
  }
}
export default Header;
