import React, { Component, Fragment } from "react";
import { Table, Col, Row, Container } from "reactstrap";
import { FaCalendarAlt } from "react-icons/fa";

class TrainingLog extends Component {
  state = { date: new Date() };

  onChange = date => this.setState({ date });

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col xs={9} sm={9} md={8} lg={7}>
              <h3 className="text-right">Workout History</h3>
            </Col>
            <Col
              href="#"
              className="text-center"
              style={{ alignItems: "center" }}
            >
              <FaCalendarAlt />
            </Col>
          </Row>
        </Container>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Distance</th>
              <th>Calories</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100M</td>
              <td>500</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>250M</td>
              <td>500</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>500M</td>
              <td>500</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>1000M</td>
              <td>500</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
            <tr>
              <td>2000M</td>
              <td>500</td>
              <td>00:05:00</td>
              <td>01/01/2019</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default TrainingLog;
