const router = require("express").Router(); 
const userController = require("../../controller/Controller"); 

// api/users
router.route("/")
    .get(userController.findAll)
    .post(userController.create); 

// matches with api/users/:id
router.route(":id").get(userController.findById); 

module.exports = router;