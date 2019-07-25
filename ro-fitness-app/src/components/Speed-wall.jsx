import React, { Component, Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row } from "reactstrap";
// import Records from "/Records";

class SpeedWall extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        {
          <Container className="position-relative" style={{ width: "340px" }}>
            <h1 className="text-center">Speed Wall</h1>
            <Row>
              <Tabs
                defaultActiveKey="100m"
                transition={false}
                id="noanim-tab-example"
                className="tabs"
              >
                <Tab eventKey="100m" title="100m" id="hundred-meters" />
                <Tab eventKey="250m" title="250m" id="two-fifty" />
                <Tab eventKey="500m" title="500m" id="five-hundred" />
                <Tab eventKey="1K" title="1K" id="one-thousand" />
                <Tab eventKey="2K" title="2K" id="two-thousand" />
                <Tab eventKey="5K" title="5K" id="fiveK" />
                <Tab eventKey="10K" title="10K" id="tenK" />
                <Tab
                  eventKey="13-1miles"
                  title="13.1 Miles"
                  id="half-marathon"
                />
                <Tab
                  eventKey="26-2miles"
                  title="26.2 Miles"
                  id="full-marathon"
                />
              </Tabs>
            </Row>
          </Container>
        }
        {
          <Container>
            <Row>
              <div id="records" />
            </Row>
          </Container>
        }
      </Fragment>
    );
  }
}

export default SpeedWall;
