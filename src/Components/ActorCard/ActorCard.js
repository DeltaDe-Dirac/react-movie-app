import React, { useState } from "react";
import "./ActorCard.css";

import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  InputGroup,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap/";

// import Ben from "./img/actors/BenAffleck.jpg";
// import Jennifer from "./img/actors/JenniferConnelly.jpg";
// import Keanu from "./img/actors/KeanuReeves.jpg";
// import Christina from "./img/actors/ChristinaHendricks.jpg";
// import Tom from "./img/actors/TomHanks.jpg";
// import Johnny from "./img/actors/JohnnyDepp.jpg";
// import Anthony from "./img/actors/AnthonyMackie.jpg";
// import Wallis from "./img/actors/WallisDay.jpg";

export default function ActorCard({ fname, lname, imgsrc, born }) {
  return (
    <Card className="text-center">
      <Card.Header>
        <Card.Title onClick={() => alert()}>
          {fname} {lname}
        </Card.Title>
      </Card.Header>

      <Card.Img variant="top" src={imgsrc} alt={`${fname} ${lname}`} />

      <Card.Body>
        <Card.Text>{born}</Card.Text>
      </Card.Body>
    </Card>
  );
}
