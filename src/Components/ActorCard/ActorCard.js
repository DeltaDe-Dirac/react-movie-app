import React from "react";
import "./ActorCard.css";

import { Card } from "react-bootstrap/";

export default function ActorCard({ fname, lname, imgsrc, born, age }) {
  return (
    <Card className="text-center">
      <Card.Header>
        <Card.Title onClick={() => alert()}>
          {fname} {lname} ({age})
        </Card.Title>
      </Card.Header>

      <Card.Img variant="top" src={imgsrc} alt={`${fname} ${lname}`} />

      <Card.Body>
        <Card.Text>{born}</Card.Text>
      </Card.Body>
    </Card>
  );
}
