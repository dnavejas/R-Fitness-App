import React, { Component, Fragment } from "react";
import { Button, Container, Row, Col } from "reactstrap";

class LogWorkout extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <br />
        <Container>
          <Row>
            <Col className="text-center">
              <h3 className="text-center">Nice Job!</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">
                Log your meters to keep a running total of your completed
                meters!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="text-center">Distance:</h5>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <input
                className="text-center"
                placeholder="Enter distance here"
                type="text"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="text-center">Time:</h5>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <input
                className="text-center"
                placeholder="hh:mm:ss"
                type="number"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="text-center">
              <Button className="welcome-button">Log It</Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="text-center">
              <Button
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#013669",
                  color: "white"
                }}
              >
                Log to Concept2 Logbook
              </Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default LogWorkout;
