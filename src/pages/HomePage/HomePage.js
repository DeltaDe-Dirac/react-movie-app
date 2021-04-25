import React from "react";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage({ pathPre }) {
  return (
    <div className="homepage-img">
      <Container>
        <h1 className="display-1">Movies App</h1>
        <Link className="text-uppercase" to="/movies">
          Movies
        </Link>
        <Link className="text-uppercase" to="/actors">
          Actors
        </Link>
        <Link to="/bla">404</Link>
      </Container>
    </div>
  );
}
