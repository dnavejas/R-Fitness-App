import React, { Component, Fragment } from "react";
import axios from "axios";
import { Badge, Button } from "reactstrap";

const buttonStyle = {
  backgroundColor: "#ba2328 !important"
};
class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios
      .get(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text"
      )
      .then(response => this.setState({ post: response.data }));
  }
  render() {
    return (
      <Fragment>
        {this.state.post && (
          <div className="position-relative">
            <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
              Editor's Pick
              <Badge
                pill
                color="success"
                className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle"
                style={{ fontSize: "0.75rem" }}
              >
                New
              </Badge>
            </span>
            <div>{this.state.post}</div>
            <div className="text-center">
              <Button
                href="/Workouts"
                className="text-center"
                style={buttonStyle}
              >
                Let's RŌ!
              </Button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default WelcomePage;
