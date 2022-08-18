const express = require("express");
const deleteUser = require("../../controllers/user/delete");
const signInUser = require("../../controllers/user/signin");
const signUpUser = require("../../controllers/user/singup");
const updateUser = require("../../controllers/user/update");

const router = express.Router();

router.post("/signup", signUpUser); //this is to signup user

router.post("/signin", signInUser); //signin user

router.patch("/update/:id", updateUser); // update user

router.delete("/delete/:id", deleteUser);

module.exports = router;
