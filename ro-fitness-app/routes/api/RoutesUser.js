const router = require("express").Router(); 
//const userController = require("../../controller/Controller"); 
const UserSchema = require('../../models/UserShema'); 

// api/users
router.route("/")
    .get(function(req, res){
        console.log("GETTING DATA"); 
        UserSchema.find(function(err, data){
            if (err){
                console.log(err); 
            }else{
                res.json(data); // returns data back to the client side   
            }
        }); 
    })
    .post(function(req, res){
        console.log("Found body sent"); 
        console.log(req.body); 
        const userData = new UserSchema(req.body); 
        userData.save().then(data => { // adds data to the database
            res.status(302); 
            res.redirect("http://localhost:3000"); // goes back to home page
            //res.json({success:true});
        })
        .catch(err=>{
            console.log("ERROR could not save to dab");
            res.status(400).send("unable to save to database");
        }); 
       
    }); 

// matches with api/users/:id
router.route("/login").post(
    function(req, res){
        // login data and checks to see if person exist
        UserSchema.findOne({emailAddress:req.body.userName, password:req.body.password},function(err, data){
           // console.log("Searching for data=query" + JSON.stringify(req.query)); 
            console.log("Searching for data=params" + JSON.stringify(req.body)); 
            
        }).then(data =>{
            
            if (data !== undefined && data !== null && data.length != 0){
                console.log("Found person!!!" + JSON.stringify(data)); 
                UserSchema.updateMany(
                    {loggedIn: false},
                  )
                  .then(function(rowsUpdated) {
                    console.log("Rows updated "+ JSON.stringify(rowsUpdated)); 
                    console.log("updateing "+ data._id); 
                    UserSchema.updateOne(
                        {loggedIn: true},
                        {where: data._id, returning:true}
                        )
                      .then(function(rowsUpdated) {
                        console.log("Rows updated "+ JSON.stringify(rowsUpdated)); 
                      });
                  });
                  
                res.json({success:true}); 
            }else{
             console.log("NOt found"); 
             res.json({success:false});  
            }
               
            
        }).catch(err =>{
            console.log("could not find in database");
        }); 
    }
); 
// checks to see who is logged in. by seeing if loggedIn=true. not completely finished. 
router.route("/currentUser").get((req, res) =>{
    UserSchema.findOne({loggedIn: true}).then(
        data =>{
            res.json(data); 
        }
    ); 
}      
); 

module.exports = router;