var db = require("../models"); 

module.exports = {
    findAll: function(req, res){
        //db.User.find(req.query).then(data => console.log(data)).catch(err => console.log(`Error occured ${err}`)); 
        db.User.find(req.query).then(dbModel => res.json(dbModel)).catch(err => console.log(err)); 
    }, 
    findById: function(req, res){   
        db.User.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); 
    },create: (req, res) =>{
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); 
    }
}; 

// create - POST 
// fetch data - GET 
// GET BY ID  



// router.get("/users", function(req, res) {
//     res.json(data); 
// }); 

// module.exports = router; 