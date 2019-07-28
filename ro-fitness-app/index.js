var express = require("express");
var path = require("path");
var routes = require("./routes");
var nodemailer = require("nodemailer");
const cors = require("cors");
const mongoose = require("mongoose");

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'emailFAKEBUTNEEDSTOBEREAL@gmail.com',
//     pass: 'password'
//   }
// });

// var mailInfo = {
//   from:'akemeubom@gmail.com',
//   to:'ribac.lilia@gmail.com',
//   subject:'Test test mail',
//   text:'How is going your day'
// }

// transporter.sendMail(mailInfo, (error, info)=>{
//   if (error){
//     console.log('Error sending email' + error);
//   }else{
//     console.log('Success' + info.response);
//   }
// });

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});

const userRouter = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client-side-application/public/index.html")
  );
});

app.listen(PORT, () => {
  console.log(`Application is now running on ${PORT}`);
});
