const express = require("express");
const  UserController = require("../controllers/User")

const api = express.Router();


api.post("/sign-up", UserController.SingUp)



module.exports = api;