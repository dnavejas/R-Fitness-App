const router = require("express").Router(); 
const userRoutes = require("./RoutesUser"); 

// User routes 
router.use("/users", userRoutes); 
module.exports = router; 