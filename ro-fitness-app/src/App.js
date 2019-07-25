import React, { Fragment } from "react";
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
    
     <Route exact={true} path="/" component={Home} /> 
   <Header />

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
