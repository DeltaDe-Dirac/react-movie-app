import React, { useState, useEffect } from "react";
import "./MoviesGallery.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap/";
import SearchMovie from "../../Components/SearchMovie/SearchMovie";
import MovieCard from "../../Components/MovieCard/MovieCard";

export default function MoviesGallery() {
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      setMoviesToDisplay(movies);
    }
  }, []);

  function addMovieCard(movieToAdd) {
    const movieInstance = axios.create({
      baseURL: `https://api.themoviedb.org/3/movie/${movieToAdd.id}?api_key=da05aa3114b146b2dd9303dad161c614&language=en-US`,
      timeout: 2000,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    movieInstance
      .get()
      .then((response) => {
        movieToAdd.poster_path = response.data.poster_path;
        movieToAdd.runtime = response.data.runtime;

        const creditInstance = axios.create({
          baseURL: `https://api.themoviedb.org/3/movie/${movieToAdd.id}/credits?api_key=da05aa3114b146b2dd9303dad161c614&language=en-US`,
          timeout: 2000,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });

        creditInstance
          .get()
          .then((response) => {
            movieToAdd.director_name = response.data.crew;
            movieToAdd.casting = response.data.cast;
            const moviesToStoreInStorage = moviesToDisplay
              .filter((existingMovie) => existingMovie.id !== movieToAdd.id)
              .concat(movieToAdd);

            setMoviesToDisplay(moviesToStoreInStorage);

            localStorage.setItem("movies", JSON.stringify(moviesToStoreInStorage));
          })
          .catch((err) => {
            console.error("/movie/credits ", err);
          });
      })
      .catch((err) => {
        console.error("/movie ", err);
      });
  }

  return (
    <Container>
      <SearchMovie addMovieCard={addMovieCard} movieCards={moviesToDisplay} />
      <div data-testid="moviesGrid">
        <Row>
          {moviesToDisplay.map((movie) => (
            <Col lg={4} md={6} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
