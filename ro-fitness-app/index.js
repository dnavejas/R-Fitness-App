
var express = require("express"); 
var mongoose = require("mongoose"); 
var path = require("path"); 

const app = express(); 
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "./client-side-application/public/index.html")); 
});
// var User = require("./models/UserShema.jsx"); 
// mongoose.connect("mongodb://localhost/liliadb");

app.listen(PORT, () => {
  console.log(`Application is now running on ${PORT}`); 
}); 
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