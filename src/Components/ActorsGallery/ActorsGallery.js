import React, { useState } from "react";
import "./ActorsGallery.css";
import _, { map } from "underscore";
import { v4 as uuidv4 } from "uuid";

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

import GalleryNavbar from "../GalleryNavBar/GalleryNavBar";
import ActorCard from "../ActorCard/ActorCard";

export default function ActorsGallery() {
  const rowSize = 3;
  const pathPre = process.env.PUBLIC_URL;

  const actorsData = [
    {
      fname: "Gal",
      lname: "Gadot",
      imgsrc: "/img/actors/GalGadot.jpg",
      born: "Born: April 30, 1985 in Rosh Ha'ayin, Israel",
      age: 36,
    },
    {
      fname: "Ben",
      lname: "Affleck",
      imgsrc: "/img/actors/BenAffleck.jpg",
      born: "Born: August 15, 1972 in Berkeley, California, USA",
      age: 49,
    },
    {
      fname: "Jennifer",
      lname: "Connelly",
      imgsrc: "/img/actors/JenniferConnelly.jpg",
      born: "Born: December 12, 1970 in Catskill Mountains, New York, USA",
      age: 51,
    },
    {
      fname: "Keanu",
      lname: "Reeves",
      imgsrc: "/img/actors/KeanuReeves.jpg",
      born: "Born: September 2, 1964 in Beirut, Lebanon",
      age: 57,
    },
    {
      fname: "Christina",
      lname: "Hendricks",
      imgsrc: "/img/actors/ChristinaHendricks.jpg",
      born: "Born: May 3, 1975 in Knoxville, Tennessee, USA",
      age: 46,
    },
    {
      fname: "Tom",
      lname: "Hanks",
      imgsrc: "/img/actors/TomHanks.jpg",
      born: "Born: July 9, 1956 in Concord, California, USA",
      age: 65,
    },
    {
      fname: "Jonny",
      lname: "Depp",
      imgsrc: "/img/actors/JohnnyDepp.jpg",
      born: "Born: June 9, 1963 in Owensboro, Kentucky, USA",
      age: 58,
    },
    {
      fname: "Anthony",
      lname: "Mackie",
      imgsrc: "/img/actors/AnthonyMackie.jpg",
      born: "Born: September 23, 1978 in New Orleans, Louisiana, USA",
      age: 43,
    },
    {
      fname: "Wallis",
      lname: "Day",
      imgsrc: "/img/actors/WallisDay.jpg",
      born: "Born: September 20, 1994 in London",
      age: 27,
    },
  ];

  const [searchPattern, setSearchPatter] = useState(null);

  const actorsDataFiltered = actorsData
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
        />
      </Col>
    ));
  console.log(actorsDataFiltered);

  const actorsDataColumns = _.chunk(actorsDataFiltered, rowSize);
  console.log(actorsDataColumns);

  const actorsData2Display = actorsDataColumns.map((columns) => <Row key={uuidv4()}>{columns}</Row>);
  console.log(actorsData2Display);

  return (
    <Container>
      <GalleryNavbar onChange={setSearchPatter} />
      {actorsData2Display}
    </Container>
  );
}
