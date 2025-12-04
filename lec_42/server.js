const express = require('express');
const app = express();
const port = 3023;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const user = require('./model/user.model');


app.post('/api/user/register',async(req, res) => {
  const { name,email, password } = req.body;
  const existinguser=await user.findOne({email:email});
  if(existinguser){
    return res.json({
        sucess:false,
        message:"User already exists"});
  }
  else{
    let newuser=user.create({
        name:name,
        email:email,
        password:password
    })
    return res.json({
        sucess:true,
        message:"User registered successfully"
    }); 
  }
});
module.exports = app;














// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });