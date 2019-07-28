const router = require("express").Router();
let User = require("../models/users.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;
  const location = req.body.location;
  const gender = req.body.gender;
  const birthday = Date.parse(req.body.birthday);

  const newUser = new User({
    firstName,
    lastName,
    emailAddress,
    location,
    gender,
    birthday
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json(User.deleted))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.firstName = req.body.firstName;
      users.lastName = req.body.lastName;
      users.emailAddress = req.body.emailAddress;
      users.location = req.body.location;
      users.gender = req.body.gender;
      users.birthday = Date.parse(req.body.birthday);

      users
        .save()
        .then(() => res.json("User updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
