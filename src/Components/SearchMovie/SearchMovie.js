import React, { useState, useEffect } from "react";
import "./SearchMovie.css";

import { InputGroup, FormControl, Navbar, Nav } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieModel from "../../model/MovieModel";
import axios from "axios";

export default function SearchMovie({ purposeText }) {
  const [searchPattern, setSearchPatter] = useState("");
  const [foundMovies, setFoundMovies] = useState(null);

  useEffect(() => {
    // console.log(searchPattern);
    if (searchPattern) {
      const instance = axios.create({
        // baseURL: "https://api.themoviedb.org/3/movie/550?api_key=da05aa3114b146b2dd9303dad161c614",
        // baseURL:
        //   "https://api.themoviedb.org/3/search/movie?api_key=da05aa3114b146b2dd9303dad161c614&query=" + searchPattern,
        baseURL: "https://api.themoviedb.org/3/search/movie?language=en-US&query=" + searchPattern,

        timeout: 1000,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTA1YWEzMTE0YjE0NmIyZGQ5MzAzZGFkMTY" +
            "xYzYxNCIsInN1YiI6IjYwN2Q1YzkwNjZmMmQyMDA0MGI1MWE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJd" +
            "LCJ2ZXJzaW9uIjoxfQ.KJZDEtg4yZqbATKcNtQ69qIov16DCH5_fcdXYVRSDaA",
        },
      });

      // FIX PREVIOUS REQUEST
      // const source = axios.CancelToken.source();
      // axios.get("/user/12345", { cancelToken: source.token });
      // source.cancel();

      instance
        .get()
        .then((response) => response.data.results.map((movie) => new MovieModel(movie)))
        .then((movies) => setFoundMovies(movies))
        .catch((err) => {
          console.log(err);
          setFoundMovies(null);
        });
      // console.log(searchResult);
    } else {
      setFoundMovies(null);
    }
    // console.log(searchPattern);
  }, [searchPattern]);

  function handleLinkClick(selectedKey) {
    setFoundMovies([...foundMovies.filter((movie) => movie.id != selectedKey)]);
    setSearchPatter("");
    // console.log(e);
  }

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
                value={searchPattern}
                onChange={(e) => setSearchPatter(e.target.value)}
                placeholder="ex: Life of Pi"
                aria-label="Search movies"
              />
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {foundMovies === null ? null : foundMovies.length === 0 ? (
        <Navbar bg="dark" variant="dark" className="result-box">
          <Nav className="flex-column">
            <Nav.Link disabled>Nothing Found</Nav.Link>
          </Nav>
        </Navbar>
      ) : (
        <Navbar bg="dark" variant="dark" className="result-box">
          <Nav className="flex-column" onSelect={(selectedKey) => handleLinkClick(selectedKey)}>
            {foundMovies.map((movie) => (
              <Nav.Link key={movie.id} eventKey={movie.id}>
                {movie.title} - {movie.year} ({movie.lang})
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
      )}
    </div>
  );
}
