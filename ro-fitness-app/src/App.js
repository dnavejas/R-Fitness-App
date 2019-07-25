import React, { Fragment } from "react";
<<<<<<< HEAD
// import axios from "axios";
// import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import Post from "./components/Workout-post";
// import Header from "./components/Header";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile"; 

const App = () => (
  <Router>
    <div>
      <Fragment>
        <Route path="/" exact strict render={ () => {
          return <Login />;
        }} />
        <Route path="/create-account" exact strict render={ () => {
          return <CreateAccount/>;
        }} />
         <Route path="/forgot-password" exact strict render={ () => {
          return <ForgotPassword/>;
        }} />
        <Route path="/profile" exact strict render={ () => {
          return <Profile/>;
        }} />
      </Fragment>
    </div>
  </Router>
  );
  //<Fragment>
    
    /* <Route exact={true} path="/" component={Home} /> */
    /* <Header />
=======

import { BrowserRouter as Router, Route } from "react-router-dom";
import WorkoutPosts from "./components/Workout-post";
import Header from "./components/Header";
import Login from "./components/Login";
import SpeedWall from "./components/Speed-wall";

import "bootstrap/dist/css/bootstrap.css";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css";
>>>>>>> 90fd09acfb0188dfd209a7f204a03c913f0cfa3f

import "./App.css";

<<<<<<< HEAD
          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            tag="section"
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            <Post />
          </Col>
        </Row>
      </Container>}
    {/* </main> */
  //</Fragment>

=======
const App = () => (
  <Router>
    <Fragment>
      <Route path="/:id" component={Header} />
      <Route exact={true} path="/" component={Login} />
      <Route exact={true} path="/Workouts" component={WorkoutPosts} />
      <Route exact={true} path="/Speedwall" component={SpeedWall} />
    </Fragment>
  </Router>
);
>>>>>>> 90fd09acfb0188dfd209a7f204a03c913f0cfa3f

export default App;
