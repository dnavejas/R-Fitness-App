var db = require("../models/UserShema"); 

module.exports = {
    findAll: function(req, res){
        db.findAll().then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err)); 
    }, 
    findById: function(req, res){   
        db.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)); 
    },create: (req, res) =>{
        db.create(req.body)
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