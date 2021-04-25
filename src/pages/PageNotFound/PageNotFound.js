import React from "react";
import "./PageNotFound.css";
import { Container } from "react-bootstrap";

export default function PageNotFound(props) {
  return (
    <div className="pagenotfound-img">
      <Container>
        <h1>404</h1>
        <p className="text-uppercase">page not found</p>
      </Container>
    </div>
  );
}
