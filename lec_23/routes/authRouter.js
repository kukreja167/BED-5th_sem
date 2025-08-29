const express=require('express');
const router=express.Router();
exports.router = router;
const usersController = require("../controller/userController");

router.post("/login",usersController.login);