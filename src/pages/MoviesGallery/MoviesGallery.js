import React, { useState, useEffect } from "react";
import "./MoviesGallery.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap/";
import SearchMovie from "../../Components/SearchMovie/SearchMovie";

export default function MoviesGallery() {
  const [searchPattern, setSearchPatter] = useState("");

  return (
    <Container>
      <SearchMovie purposeText="Search Movies" onChange={setSearchPatter} />
    </Container>
  );
}
