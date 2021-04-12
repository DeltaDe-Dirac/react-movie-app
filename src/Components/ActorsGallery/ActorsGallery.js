import React, { useState } from "react";
import "./ActorsGallery.css";
import _ from "underscore";
import { v4 as uuidv4 } from "uuid";

import { Container, Row, Col } from "react-bootstrap/";

import GalleryNavbar from "../GalleryNavBar/GalleryNavBar";
import ActorCard from "../ActorCard/ActorCard";
import { getActors } from "../ActorsGallery/ActorsGalleryData";

export default function ActorsGallery() {
  const rowSize = 3;
  const pathPre = process.env.PUBLIC_URL;

  const [searchPattern, setSearchPatter] = useState(null);

  const actorsDataFiltered = getActors()
    .filter(
      (actor) =>
        searchPattern === null ||
        searchPattern.length === 0 ||
        searchPattern.toLowerCase().includes(actor.fname.toLowerCase()) ||
        searchPattern.toLowerCase().includes(actor.lname.toLowerCase()) ||
        searchPattern.includes(actor.age)
    )
    .map((actor) => (
      <Col key={uuidv4()}>
        <ActorCard
          key={uuidv4()}
          fname={actor.fname}
          lname={actor.lname}
          imgsrc={pathPre.concat(actor.imgsrc)}
          born={actor.born}
          age={actor.age}
        />
      </Col>
    ));
  // console.log(actorsDataFiltered);

  // const actorsDataColumns = _.chunk(actorsDataFiltered, rowSize);
  // console.log(actorsDataColumns);

  const actorsData2Display = _.chunk(actorsDataFiltered, rowSize).map((columns) => <Row key={uuidv4()}>{columns}</Row>);
  // console.log(actorsData2Display);

  return (
    <Container>
      <GalleryNavbar onChange={setSearchPatter} />
      {actorsData2Display}
    </Container>
  );
}
