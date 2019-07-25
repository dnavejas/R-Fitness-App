import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WorkoutPosts from "./components/Workout-post";
import Header from "./components/Header";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";
import SpeedWall from "./components/Speed-wall";
import PersonalRecords from "./components/Personal-Records";
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Route path="/" exact={true} component={Login} />
      <Route path="/:id" component={Header} />
      <Route path="/create-account" exact={true} component={CreateAccount} />
      <Route path="/forgot-password" exact={true} component={ForgotPassword} />
      <Route path="/profile" component={Profile} />
      <Route path="/Workouts" exact={true} component={WorkoutPosts} />
      <Route path="/Speedwall" exact={true} component={SpeedWall} />
      <Route path="/Personalrecords" exact={true} component={PersonalRecords} />
    </Fragment>
  </Router>
);

export default App;
