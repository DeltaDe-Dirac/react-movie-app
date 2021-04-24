import React from "react";
import "./GalleryNavBar.css";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownMultiSelect from "../MultiSelectDropDown/DropdownMultiselect";

export default function GalleryNavBar({ onChange, onSelect }) {
  function handleSortCritera(criteria) {
    const selection = Array(4).fill(false);
    criteria.forEach((criterion) => (selection[criterion] = true));
    onSelect(selection);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="actorsNavbar">
      <Navbar.Brand>
        <FontAwesomeIcon className="fa-icon" icon="film" />
      </Navbar.Brand>
      <Navbar.Brand>Actors Gallery</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="search">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Filter By:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={(e) => (e.target.value.trim().length > 1 ? onChange(e.target.value.trim()) : onChange(""))}
              placeholder="First Name, Second Name or Age"
              aria-label="Search by First Name, Second Name or Age"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Nav>
        <Nav className="navDivider"></Nav>
        <Nav>
          <DropDownMultiSelect handleChange={handleSortCritera} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
