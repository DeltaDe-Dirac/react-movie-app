import React from "react";
import "./ActorCard.css";

import { Card, Button, Container, Row, Col } from "react-bootstrap/";
import Gal from "./img/actors/GalGadot.jpg";
import Ben from "./img/actors/BenAffleck.jpg";
import Jennifer from "./img/actors/JenniferConnelly.jpg";

export default function ActorCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Gal Gadot</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Gal} />
            <Card.Body>
              <Card.Text>
                Gal Gadot is an Israeli actress, singer, martial artist, and model
                <p>Born: April 30, 1985 in Rosh Ha'ayin, Israel</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Ben Affleck</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Ben} />
            <Card.Body>
              <Card.Text>
                American actor and filmmaker Benjamin Géza Affleck-Boldt
                <p>Born: August 15, 1972 in Berkeley, California, USA</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Gal Gadot</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Jennifer} />
            <Card.Body>
              <Card.Text>
                Jennifer Connelly was born in the Catskill Mountains, New York, to Ilene (Schuman), a dealer of
                antiques, and Gerard Connelly, a clothing manufacturer.
                <p>Born: December 12, 1970 in Catskill Mountains, New York, USA</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Gal Gadot</Card.Header>

            <Card.Img variant="top" src={Gal} />
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

            <Card.Img variant="top" src={Gal} />
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

            <Card.Img variant="top" src={Gal} />
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
