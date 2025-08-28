const express=require('express');
const router=express.Router();
exports.router = router;
const usersController = require("../controller/userController");
function isLogin(req,res,next){
    let token = req.headers['authorization'];
    let decode=jwt.verify(token,"okkkk");
    if(decode){
        next();
        req.username = decode.user.name;
    }else{
        res.json({
            success : false,
            message : "Please login first"
        })
    }
    
    console.log(token);
}
// read all users

router.get("/",usersController.users);

// create user
router.post("/",usersController.newuser);
// read single user
router.get("/users/:id",usersController.getuserbyid);
router.delete("/users/:id",usersController.deleteuser);
router.post("/login",usersController.login);
router.get("/home",isLogin,(req,res)=>{
    let username=req.username;
res.json({
    success : true,
    message : "Welcome to home page"    
})
});

module.exports=router;
