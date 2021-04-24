import React, { useState, useEffect } from "react";
import "./MoviesGallery.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap/";
import SearchMovie from "../../Components/SearchMovie/SearchMovie";
import MovieCard from "../../Components/MovieCard/MovieCard";
import MovieModel from "../../model/MovieModel";

export default function MoviesGallery() {
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);

  function addMovieCard(movieToAdd) {
    const instance = axios.create({
      baseURL: `https://api.themoviedb.org/3/movie/${movieToAdd.id}?api_key=da05aa3114b146b2dd9303dad161c614&language=en-US`,
      //   baseURL: "https://api.themoviedb.org/3/configuration",
      //   http://image.tmdb.org/t/p/
      //   https://image.tmdb.org/t/p/

      timeout: 2000,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    instance
      .get()
      .then((response) => {
        movieToAdd.poster_path = response.data.poster_path;
        movieToAdd.runtime = response.data.runtime;
        console.log(response.data, "|", movieToAdd.imgsrc, "|", movieToAdd.duration, "|", response.data.runtime);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(movieToAdd);
    setMoviesToDisplay(
      moviesToDisplay.filter((existingMovie) => existingMovie.id !== movieToAdd.id).concat(movieToAdd)
    );
  }

  //   FIX IMAGE SYNC
  useEffect(() => {}, [moviesToDisplay]);

  return (
    <Container>
      <SearchMovie addMovieCard={addMovieCard} movieCards={moviesToDisplay} />
      <div data-testid="moviesGrid">
        <Row>
          {moviesToDisplay.map((movie) => (
            <Col lg={3} md={6} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
