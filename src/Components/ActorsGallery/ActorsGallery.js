import React, { useState } from "react";
import "./ActorsGallery.css";

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
  const [searchPattern, setSearchPatter] = useState(null);
  return (
    <Container>
      <GalleryNavbar onChange={setSearchPatter} />
      <ActorCard />
    </Container>
  );
}
