const express=require('express');
const router=express.Router();
exports.router = router;
const blogController = require("../controller/blogController");
const isLogin = require("../middleware/Auth");




router.post('/',isLogin,blogController.postnewblog); 
router.get('/',blogController.getallblogs);
router.get('/blog/:id',blogController.getblogbyid); 
router.delete('/blog/:id',isLogin,blogController.deleteblog);






module.exports=router;