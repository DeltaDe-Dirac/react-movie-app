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
  const [sortFields, setSortFields] = useState(Array(4).fill(false));

  const actorsDataFiltered = getActors()
    .filter(
      (actor) =>
        searchPattern === null ||
        searchPattern.length === 0 ||
        searchPattern.toLowerCase().includes(actor.fname.toLowerCase()) ||
        searchPattern.toLowerCase().includes(actor.lname.toLowerCase()) ||
        searchPattern.includes(actor.age)
    )
    .sort((actor1, actor2) => sortAny(actor1, actor2))
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

  const actorsData2Display = _.chunk(actorsDataFiltered, rowSize).map((columns) => <Row key={uuidv4()}>{columns}</Row>);

  function sortAny(actor1, actor2) {
    let isSortByFName = sortFields[0];
    let isSortBySName = sortFields[1];
    let isSortByAge = sortFields[2];
    let sortOrder = sortFields[3] ? -1 : 1;
    let sortResult = 0;

    if (isSortByFName) {
      sortResult = sortStrings(actor1.fname, actor2.fname);
    }

    if (isSortBySName && sortResult === 0) {
      sortResult = sortStrings(actor1.lname, actor2.lname);
    }

    if (isSortByAge && sortResult === 0) {
      sortResult = actor1.age - actor2.age;
    }
    return sortOrder * sortResult;
  }

  function sortStrings(str1, str2) {
    if (str1 < str2) {
      return -1;
    }
    if (str1 > str2) {
      return 1;
    }

    return 0;
  }

  return (
    <Container>
      <GalleryNavbar onChange={setSearchPatter} onSelect={setSortFields} />
      {actorsData2Display}
    </Container>
  );
}
