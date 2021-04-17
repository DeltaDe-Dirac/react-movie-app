import React, { useState } from "react";
import "./ActorsGallery.css";
import _ from "underscore";
import { v4 as uuidv4 } from "uuid";

import { Container, Row, Col } from "react-bootstrap/";

import GalleryNavbar from "../GalleryNavBar/GalleryNavBar";
import ActorCard from "../ActorCard/ActorCard";

export default function ActorsGallery({ actors, pathPre, rowSize }) {
  const [searchPattern, setSearchPatter] = useState("");
  const [sortFields, setSortFields] = useState(Array(4).fill(false));

  const regexp =
    searchPattern.trim().length < 2 ? new RegExp(/.*/, "i") : new RegExp(searchPattern.trim().replace(/ /g, "|"), "i");

  const actorsDataFiltered = actors
    .filter((actor) => regexp.test(actor.fname) || regexp.test(actor.lname) || regexp.test(actor.age))
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
    let [isSortByFName, isSortByLName, isSortByAge, sortOrder] = sortFields;
    sortOrder = sortOrder ? -1 : 1;
    let sortResult = 0;

    if (isSortByFName) {
      sortResult = sortStrings(actor1.fname, actor2.fname);
    }

    if (isSortByLName && sortResult === 0) {
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
      <div data-testid="actorsGrid">{actorsData2Display}</div>
    </Container>
  );
}
