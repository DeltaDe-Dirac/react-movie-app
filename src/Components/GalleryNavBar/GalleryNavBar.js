import React, { useState } from "react";
import "./GalleryNavBar.css";
import { Navbar, Nav, InputGroup, FormControl, NavDropdown } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GalleryNavBar({ onChange, onSelect }) {
  const [activeSelection, setSelected] = useState(Array(4).fill(false));

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <FontAwesomeIcon className="fa-icon" icon="film" />
      </Navbar.Brand>
      <Navbar.Brand>Actors Gallery</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="search">
          <InputGroup
            onChange={(e) => (e.target.value.trim().length > 1 ? onChange(e.target.value.trim()) : onChange(""))}
          >
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
        <Nav
          className="mr-auto"
          // defaultActiveKey="1"
          onSelect={(eventKey) => {
            if (parseInt(eventKey) === 4) {
              setSelected(Array(4).fill(false));
              onSelect(Array(4).fill(false));
            } else {
              activeSelection[eventKey] = !activeSelection[eventKey];
              setSelected([...activeSelection]);
              onSelect(activeSelection);
            }
          }}
        >
          <NavDropdown title="Sort By" id="collapsible-nav-dropdown" drop="left">
            <NavDropdown.Item eventKey="0" active={activeSelection[0] ? true : false}>
              First Name
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="1" active={activeSelection[1] ? true : false}>
              Last Name
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2" active={activeSelection[2] ? true : false}>
              Age
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="3" active={activeSelection[3] ? true : false}>
              Descending Order
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4" active={false}>
              Clear All
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
