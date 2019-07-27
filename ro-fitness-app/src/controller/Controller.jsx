var express = require(express);
var router = express.Router(); 


var data = [{
    name: "Jose", 
    age: 15
},{
    name: "Josefina", 
    age: 24
}];

router.get("/users", function(req, res) {
    res.json(data); 
}); 

module.exports = router; 