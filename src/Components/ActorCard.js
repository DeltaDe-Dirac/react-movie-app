import React from "react";
import "./ActorCard.css";

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
import Gal from "./img/actors/GalGadot.jpg";
import Ben from "./img/actors/BenAffleck.jpg";
import Jennifer from "./img/actors/JenniferConnelly.jpg";
import Keanu from "./img/actors/KeanuReeves.jpg";
import Christina from "./img/actors/ChristinaHendricks.jpg";
import Tom from "./img/actors/TomHanks.jpg";
import Johnny from "./img/actors/JohnnyDepp.jpg";
import Anthony from "./img/actors/AnthonyMackie.jpg";
import Wallis from "./img/actors/WallisDay.jpg";

export default function ActorCard() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" onClick={() => alert()}>
          Actors Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Search Pattern" aria-label="Username" aria-describedby="basic-addon1" />
            </InputGroup>
          </Nav>
          <Nav className="mr-auto" activeKey="1" onSelect={handleSelect}>
            <NavDropdown title="Sort By" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" eventKey="1">
                First Name
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" eventKey="2">
                Second Name
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" eventKey="3">
                Age
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" eventKey="4">
                Descending Order
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Gal Gadot</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Gal} />
            <Card.Body>
              <Card.Text>Born: April 30, 1985 in Rosh Ha'ayin, Israel</Card.Text>
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
              <Card.Text>Born: August 15, 1972 in Berkeley, California, USA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Jennifer Connelly</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Jennifer} />
            <Card.Body>
              <Card.Text>Born: December 12, 1970 in Catskill Mountains, New York, USA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Keanu Reeves</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Keanu} />
            <Card.Body>
              <Card.Text>Born: September 2, 1964 in Beirut, Lebanon</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Christina Hendricks</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Christina} />
            <Card.Body>
              <Card.Text>Born: May 3, 1975 in Knoxville, Tennessee, USA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Tom Hanks</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Tom} />
            <Card.Body>
              <Card.Text>Born: July 9, 1956 in Concord, California, USA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Johnny Depp</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Johnny} />
            <Card.Body>
              <Card.Text>Born: June 9, 1963 in Owensboro, Kentucky, USA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Anthony Mackie</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Anthony} />
            <Card.Body>
              <Card.Text>Born: September 23, 1978 in New Orleans, Louisiana, USA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title onClick={() => alert()}>Wallis Day</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={Wallis} />
            <Card.Body>
              <Card.Text>Born: September 20, 1994 in London</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
