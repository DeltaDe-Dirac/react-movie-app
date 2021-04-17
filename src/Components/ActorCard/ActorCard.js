import React from "react";
import "./ActorCard.css";

import { Card } from "react-bootstrap/";

export default function ActorCard({ fname, lname, imgsrc, born, age }) {
  return (
    <Card className="text-center">
      <Card.Header>
        <Card.Title
          data-testid="cardTitle"
          onClick={(e) => {
            const title = e.target.innerText.split(" ");
            window.open("https://www.imdb.com/find?q=".concat(`${title[0]}+${title[1]}`), "_blank");
          }}
        >
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
