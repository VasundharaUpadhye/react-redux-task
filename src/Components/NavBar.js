import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar className="bg-success bg-gradient bg-opacity-50" variant="light">
      <Container fluid>
        <Navbar.Brand href="/">SHOP HERE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Filter" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/men">Men</NavDropdown.Item>
              <NavDropdown.Item href="/women">Women</NavDropdown.Item>
              <NavDropdown.Item href="/jewellery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item href="/electronics">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Sort" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/lowprice">
                Price Low to high
              </NavDropdown.Item>
              <NavDropdown.Item href="/highprice">
                Price High to Low
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
