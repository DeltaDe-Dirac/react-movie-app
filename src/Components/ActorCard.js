import React from "react";
import "./ActorCard.css";

import { Card, Button, Container, Row, Col } from "react-bootstrap/";
// import Button from "react-bootstrap/Button";
// import Gal from "./img/actors/GalGadot.jpg";

export default function ActorCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Gal Gadot</Card.Header>

            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/actors/GalGadot.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Gal Gadot</Card.Header>

            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/actors/GalGadot.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Gal Gadot</Card.Header>

            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/actors/GalGadot.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Gal Gadot</Card.Header>

            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/actors/GalGadot.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Gal Gadot</Card.Header>

            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/actors/GalGadot.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Gal Gadot</Card.Header>

            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/img/actors/GalGadot.jpg"} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
