import React, { Component, Fragment } from "react";
import { Table, Container, Row, Col } from "reactstrap";
class PersonalRecords extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1 className="text-center">History</h1>
        <Container>
          <Row>
            <Col className="personal-records"> Current Season</Col>
            <Col className="personal-records"> Total Distance</Col>
          </Row>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Distance</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100M</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>250M</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>500M</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>1000M</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>2000M</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>5000M</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>10000M</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>13.1 Miles</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>26.2 Miles</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default PersonalRecords;
