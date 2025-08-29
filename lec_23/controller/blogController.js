const Blog = require("../model/blog");
const User = require("../model/user");

module.exports.postnewblog = async (req, res) => {
  try {
    const { title, body } = req.body;
    const userid = req.userid;

    if (!userid) {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    let user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    let blog = {
      title,
      body,
      userId: userid,
      date: Date.now()
    };

    let newblog = new Blog(blog);
    await newblog.save();

    user.blogs.push(newblog._id);
    await user.save();

    res.json({
      success: true,
      message: "Blog created successfully",
      data: newblog
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
};
module.exports.getallblogs= async (req, res) => {
  const blogs = await Blog.find();
  res.json({
    success: true,
    message: "Blogs fetched successfully",
    data: blogs
  });
}
module.exports.deleteblog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.userid; // ✅ from JWT middleware

    let blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found"
      });
    }

    // Check blog ownership
    if (blog.userId.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Permission denied"
      });
    }

    await Blog.findByIdAndDelete(blogId);

    // Also remove blog reference from user
    let user = await User.findById(userId);
    if (user) {
      user.blogs = user.blogs.filter(id => id.toString() !== blogId);
      await user.save();
    }

    res.json({
      success: true,
      message: "Blog deleted successfully"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
};
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