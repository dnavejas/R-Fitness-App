var express = require("express"); 
var mongoose = require("mongoose"); 
const app = express(); 
const PORT = process.env.PORT || 5000; 

// app.use(express.json());
// app.use(express.urlencoded({extended: true})); 



// var User = require("./models/UserShema.jsx"); 
// mongoose.connect("mongodb://localhost/liliadb");

// app.listen(PORT, () => {
//   console.log(`Application is now running on ${PORT}`); 
// }); 
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