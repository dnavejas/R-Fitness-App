import React, { Component, Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class SpeedWall extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        {
          <main className="position-relative">
            <h1 className="text-center">Speed Wall</h1>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="home" title="Home" />
              <p>Generic Text</p>
              <Tab eventKey="profile" title="Profile" />
              <p>Generic Text 2</p>
              <Tab eventKey="contact" title="Contact" />
              <p>Generic Text 3</p>
            </Tabs>
          </main>
        }
      </Fragment>
    );
  }
}

export default SpeedWall;
