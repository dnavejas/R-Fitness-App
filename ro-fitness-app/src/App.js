import React, { Fragment } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import WorkoutPosts from "./components/Workout-post";
import Header from "./components/Header";
import Login from "./components/Login";
import SpeedWall from "./components/Speed-wall";

import "bootstrap/dist/css/bootstrap.css";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css";

import "./App.css";

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

export default App;
