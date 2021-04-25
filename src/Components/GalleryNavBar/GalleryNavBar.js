import React, { useState } from "react";
import { Redirect } from "react-router";
import "./GalleryNavBar.css";

import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownMultiSelect from "../MultiSelectDropDown/DropdownMultiselect";

export default function GalleryNavBar({ onChange, onSelect }) {
  const [redirectTo, setRedirectTo] = useState(null);

  function handleSortCritera(criteria) {
    const selection = Array(4).fill(false);
    criteria.forEach((criterion) => (selection[criterion] = true));
    onSelect(selection);
  }

  if (redirectTo !== null) {
    return <Redirect to={redirectTo}></Redirect>;
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="actorsNavbar">
      <Navbar.Brand>
        <FontAwesomeIcon className="fa-icon" icon="film" />
      </Navbar.Brand>
      <Navbar.Brand>Actors Gallery</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar bg="dark" variant="dark" onSelect={(selectedKey) => setRedirectTo(selectedKey)}>
          <Nav.Link eventKey="/">Home</Nav.Link>
          <Nav.Link eventKey="/movies">Movies</Nav.Link>
        </Navbar>
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
