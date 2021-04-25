import React from "react";
import "./MovieCard.css";

import { Card } from "react-bootstrap/";

export default function MovieCard({ movie }) {
  return (
    <Card className="movieCard">
      <Card.Header>
        <Card.Title
          className="text-center"
          data-testid="movieTitle"
          //   onClick={(e) => {
          //     const title = e.target.innerText.split(" ");
          //     window.open("https://www.imdb.com/find?q=".concat(`${title[0]}+${title[1]}`), "_blank");
          //   }}
        >
          {movie.title} ({movie.year})
        </Card.Title>
      </Card.Header>

      <Card.Img variant="top" src={movie.imgsrc} alt={`${movie.title}`} />

      <Card.Body className="text-start">
        <Card.Text>Duration: {movie.duration} [min]</Card.Text>
        <Card.Text>Director: {movie.director}</Card.Text>
        <Card.Text>Stars: {movie.actors.join(", ")}</Card.Text>
        <Card.Text>{movie.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
}
