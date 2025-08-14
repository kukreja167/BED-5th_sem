const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 1122;
const Blog = require('./model/blog');
const User = require('./model/user');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//create
app.post('/blogs', async (req, res) => {
const{id,title,body}= req.body;
let blog={
    id: id,
    title: title,
    body: body,
    date: Date.now()
}
let newblog=new Blog(blog);
await newblog.save()
res.json({
    success: true,
    message: "Blog created successfully",
    data: newblog
});

});
app.get('/allblogs', async (req, res) => {
  const blogs = await Blog.find();
  res.json({
    success: true,
    message: "Blogs fetched successfully",
    data: blogs
  });
});
app.get('/blog/:id', async (req, res) => {
  let id = req.params.id; 
  let blog = await Blog.findById(id); 
  if (!blog) {
    return res.json({
      success: false,
      message: "Blog not found"
    });
  }
  res.json({
    success: true,
    message: "Blog fetched successfully",
    data: blog
  });
});

// create user
app.post("/user", async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = {
        name : name,
        email : email,
        password : password
    }
    let newUser = new User(user)
    await newUser.save()
    res.json({
        success : true,
        message : "user added successfully",
        data : newUser
    })
})

// read
// read all users
app.get("/users", async (req,res)=>{
    let allUsers = await User.find();
    res.json({
        success : true,
        message : "all users fetched successfully",
        data : allUsers
    })
})

// read single user
app.get("/users/:id", async(req,res)=>{
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success : true,
        message : "user fetched successfully",
        data : user
    })
})



mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});