// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Create from './components/Create';
// import Index from './components/Index';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WorkoutPosts from "./components/Workout-post";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import ForgotPassword from "./components/ForgotPassword";
import SpeedWall from "./components/Speed-wall";
import PersonalRecords from "./components/Personal-Records";
import Welcome from "./components/Welcome";
import TrainingLog from "./components/TrainingLog";
import "./App.css";
import EditAccount from "./components/EditAccount";

// class App extends Component {
//   render() { 
//     return (
//       <Router>
//       <Fragment>
//         <Route path="/" exact={true} component={Login} />
//         <Route path="/:id" component={NavBar} />
//         <Route path="/Create-account" exact={true} component={CreateAccount} />
//         <Route path="/Forgot-password" exact={true} component={ForgotPassword} />
//         <Route path="/Profile" exact={true} component={EditAccount} />
//         <Route path="/Welcome" exact={true} component={Welcome} />
//         <Route path="/Workouts" exact={true} component={WorkoutPosts} />
//         <Route path="/Speedwall" exact={true} component={SpeedWall} />
//         <Route path="/Traininglogs" exact={true} component={TrainingLog} />
//         <Route path="/Personalrecords" exact={true} component={PersonalRecords} />
//       </Fragment>
//     </Router>
//       // <Router>
//       //   <div className="container">
//       //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       //       <a className="navbar-brand">React Axios App</a>
//       //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       //         <ul className="navbar-nav mr-auto">
//       //           <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
//       //           <li className="nav-item"><Link to={'/index'} className="nav-link">List</Link></li>
//       //         </ul>
//       //         <hr />
//       //       </div>
//       //     </nav>
//       //     <Switch>
//       //         <Route exact path='/create' component={ Create } />
//       //         <Route path='/index' component={ Index } />
//       //     </Switch>
//       //   </div>
//       // </Router>
//     );
//   }
// }

const App = () => (
  <Router>
    <Fragment>
      <Route path="/" exact={true} component={Login} />
      <Route path="/:id" component={NavBar} />
      <Route path="/Create-account" exact={true} component={CreateAccount} />
      <Route path="/Forgot-password" exact={true} component={ForgotPassword} />
      <Route path="/Profile" exact={true} component={EditAccount} />
      <Route path="/Welcome" exact={true} component={Welcome} />
      <Route path="/Workouts" exact={true} component={WorkoutPosts} />
      <Route path="/Speedwall" exact={true} component={SpeedWall} />
      <Route path="/Traininglogs" exact={true} component={TrainingLog} />
      <Route path="/Personalrecords" exact={true} component={PersonalRecords} />
    </Fragment>
  </Router>
);

export default App;
