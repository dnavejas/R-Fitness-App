import React, { Component, Fragment } from "react";
import axios from "axios";

class WorkoutPosts extends Component {
  state = { post: null };

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
          <main className="position-relative">
            <article
              className="pt-5 text-secondary text-justify"
              style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}
            >
              {this.state.post}
            </article>
          </main>
        )}
      </Fragment>
    );
  }
}

export default WorkoutPosts;
