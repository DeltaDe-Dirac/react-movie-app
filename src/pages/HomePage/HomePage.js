import React from "react";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage({ pathPre }) {
  const style = {};

  return (
    <div className="homepage-img">
      <Container>
        <h1 className="display-1">Movies App</h1>
        <p>Amazing movie app!</p>
        <Link to="/movies">Movies</Link>
        <Link to="/actors">Actors</Link>
        <Link to="/bla">Bla</Link>
      </Container>
    </div>
  );
}
