import React from "react";
import logo from "../images/ro-fitness-logo.png";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const AVATAR =
  "https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg";

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
          <Col className="d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
              <UncontrolledDropdown
                className="d-flex align-items-center"
                nav
                inNavbar
              >
                <DropdownToggle className="font-weight-bold" nav caret>
                  MENU
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    className="font-weight-bold text-secondary text-uppercase"
                    header
                    disabled
                  >
                    Rō FITNESS
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#">Today's Workout</DropdownItem>
                  <DropdownItem href="#">Profile</DropdownItem>
                  <DropdownItem href="#">Training Log</DropdownItem>
                  <DropdownItem href="#">Personal Records</DropdownItem>
                  <DropdownItem href="#">Speed Wall</DropdownItem>
                  <DropdownItem href="#">Concept2 Logbook</DropdownItem>
                  <DropdownItem href="#">Log Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Col>

          <Col className="text-center">
            <NavbarBrand
              className=" p-0"
              href="/"
              //   style={{ width: 100 }}
            >
              <img src={logo} alt="logo" className="text-center" />
            </NavbarBrand>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input
                type="search"
                className="mr-3"
                placeholder="Search React Courses"
              />
              <Button type="submit" color="info" outline>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
