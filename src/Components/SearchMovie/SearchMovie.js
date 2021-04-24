import React, { useState, useEffect } from "react";
import "./SearchMovie.css";

import { InputGroup, FormControl, Navbar, Nav } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchMovie({ purposeText }) {
  const [searchPattern, setSearchPatter] = useState("");
  const [foundMovies, setFoundMovies] = useState(null);

  useEffect(() => {
    const searchResult = [
      <Nav.Link key="1" eventKey="link-1">
        Link
      </Nav.Link>,
      <Nav.Link key="2" eventKey="link-2">
        Link
      </Nav.Link>,
    ];
    if (searchPattern) {
      setFoundMovies(
        <Navbar bg="dark" variant="dark" className="result-box">
          <Nav className="flex-column text-center">{searchResult}</Nav>
        </Navbar>
      );
    } else {
      setFoundMovies(null);
    }
    console.log(searchPattern);
  }, [searchPattern]);

  return (
    <div className="moviesNavbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <FontAwesomeIcon className="fa-icon" icon="film" />
        </Navbar.Brand>
        <Navbar.Brand>Movies Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="searchNav">
          <Nav className="search">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>{purposeText}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={(e) => setSearchPatter(e.target.value)}
                placeholder="ex: Life of Pi"
                aria-label="Search movies"
              />
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {foundMovies}
    </div>
  );
}
