<<<<<<< HEAD

// c
// var mongoose = require("mongoose"); 

// var User = require("./models/UserShema.jsx"); 

// mongoose.connect("mongodb://localhost/liliaDatabase", {useNewUrlParser: true}); 
// // lastName, firstName, emailAddress, birthday, location, gender, 
// var person = {
//   firstName: "Joe", 
//   lastName: "Doe",
//   emailAddress: "joe.doe@gmail.com",
//   birthday: "01-01-1999",
//   location: "Austin",
//   gender: "M"
// }; 

/**
 * 1st : create 
 * 2nd : Then 
 * 3rd: Error: if and only create function was invalid. 
 */
// User.create(person).then(console.log(person)).catch(function(err){
//   console.log(err);
// }); 

=======
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WorkoutPosts from "./components/Workout-post";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import AccountNew from "./components/Account";
import Profile from "./components/Profile";
import SpeedWall from "./components/Speed-wall";
import PersonalRecords from "./components/Personal-Records";
import Welcome from "./components/Welcome";
import TrainingLog from "./components/TrainingLog";
import "./App.css";
import LogWorkout from "./components/LogWorkout";

const App = () => (
  <Router>
    <Fragment>
      <Route path="/" exact={true} component={Login} />
      <Route path="/:id" component={NavBar} />
      <Route path="/Create-account" exact={true} component={CreateAccount} />
      <Route path="/Forgot-password" exact={true} component={ForgotPassword} />
      <Route path="/Profile" exact={true} component={Profile} />
      <Route path="/AccountNew"  exact={true} component={AccountNew} />
      <Route path="/Welcome" exact={true} component={Welcome} />
      <Route path="/Workouts" exact={true} component={WorkoutPosts} />
      <Route path="/Speedwall" exact={true} component={SpeedWall} />
      <Route path="/Traininglogs" exact={true} component={TrainingLog} />
      <Route path="/Logworkout" exact={true} component={LogWorkout} />
      <Route path="/Personalrecords" exact={true} component={PersonalRecords} />
    </Fragment>
  </Router>
);
>>>>>>> 2fe77ac8ccb51ca33dfb5ce58d3020a9496e3dea

