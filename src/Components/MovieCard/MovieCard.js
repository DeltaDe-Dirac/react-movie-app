import React from "react";
import "./MovieCard.css";

import { Card } from "react-bootstrap/";

export default function MovieCard({ movie }) {
  return (
    <Card className="movieCard text-center">
      <Card.Header>
        <Card.Title
          data-testid="movieTitle"
          //   onClick={(e) => {
          //     const title = e.target.innerText.split(" ");
          //     window.open("https://www.imdb.com/find?q=".concat(`${title[0]}+${title[1]}`), "_blank");
          //   }}
        >
          {movie.title}
        </Card.Title>
      </Card.Header>

      <Card.Img variant="top" src={movie.imgsrc} alt={`${movie.title}`} />

      <Card.Body>
        <Card.Text>Duration [min]: {movie.duration}</Card.Text>
        <Card.Text>Director: {movie.director}</Card.Text>
        <Card.Text>Stars</Card.Text>
        <Card.Text>{movie.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
}
