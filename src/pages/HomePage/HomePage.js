import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <Container>
      <h1 className="display-1">React Movie App</h1>
      <p>Amazing movie app!</p>
      <Link className="btn btn-primary" to="/movies">
        Movies
      </Link>
      <Link className="btn btn-primary" to="/actors">
        Actors
      </Link>
      <Link className="btn btn-primary" to="/bla">
        Bla
      </Link>
    </Container>
  );
}
