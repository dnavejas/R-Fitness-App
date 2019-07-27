var express = require("express"); 
var path = require("path"); 
var routes = require("./routes"); 

const app = express(); 
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(routes); 

// app.get("*", (req, res)=>{
//   res.sendFile(path.join(__dirname, "./client-side-application/public/index.html")); 
// });

app.listen(PORT, () => {
  console.log(`Application is now running on ${PORT}`); 
}); 
 
