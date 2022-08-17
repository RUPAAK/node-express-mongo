const express= require('express')
const signUpUser = require('../../controllers/user/singup')

const router= express.Router()


router.post("/signup", signUpUser) //this is to signup user


module.exports = router