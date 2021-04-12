import React from "react";
import "./GalleryNavBar.css";
import { Navbar, Nav, InputGroup, FormControl, NavDropdown } from "react-bootstrap/";

export default function GalleryNavBar({ onChange }) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Actors Gallery</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="search">
          <InputGroup onChange={(e) => onChange(e.target.value)}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Filter By:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="First Name, Second Name or Age"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Nav>
        <Nav className="mr-auto" activeKey="1" onSelect={handleSelect}>
          <NavDropdown title="Sort By" id="collasible-nav-dropdown">
            <NavDropdown.Item eventKey="1">First Name</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Second Name</NavDropdown.Item>
            <NavDropdown.Item eventKey="3">Age</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4">Descending Order</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
