const express=require('express');
const router=express.Router();
exports.router = router;
const blogController = require("../controller/blogController");

router.post('/',blogController.postnewblog); 
router.get('/',blogController.getallblogs);
router.get('/blog/:id',blogController.getblogbyid); 
router.delete('/blog/:id',blogController.deleteblog);






module.exports=router;