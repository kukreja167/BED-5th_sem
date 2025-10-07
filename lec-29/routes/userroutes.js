const express=require("express");
const router=express.Router();
const {postUser}=require("../controllers/usercontroller");
router.post("/adduser",postUser);
module.exports=router;