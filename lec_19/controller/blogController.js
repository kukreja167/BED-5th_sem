const Blog = require("../model/blog");
const User = require("../model/user");

module.exports.postnewblog=async (req, res) => {
const{id,title,body}= req.body;
const userid= req.body.userid;
let blog={
    id: id,
    title: title,
    body: body,
    userId: userid,
    date: Date.now()
}
let newblog=new Blog(blog);
await newblog.save()
let user = await User.findById(userid);
console.log(user);
user.blogs.push(newblog._id);
await user.save();
res.json({
    success: true,
    message: "Blog created successfully",
    data: newblog
});

}
module.exports.getallblogs= async (req, res) => {
  const blogs = await Blog.find();
  res.json({
    success: true,
    message: "Blogs fetched successfully",
    data: blogs
  });
}
module.exports.deleteblog=async (req, res) => {
  let id = req.params.id;
  let userId = req.body.userid; // Assuming you pass userId in the request body
  let blog = await Blog.findById(id);
  if (!blog) {
    return res.json({
      success: false,
      message: "Blog not found"
    });
  }
  if (blog.userId.toString() !== userId) {
    return res.json({
      success: false,
      message: "Permission denied."
    });
  }
  await Blog.findByIdAndDelete(id);
  let user = await User.findById(userId);
  user.blogs = user.blogs.filter(blogId => blogId.toString() !== id);
  await user.save();
  res.json({
    success: true,
    message: "Blog deleted successfully"
  });
}
module.exports.getblogbyid=async (req, res) => {
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
}