const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  id: Number,  
  title: String,
  body: String,
  date: Date
});
module.exports=mongoose.model('Blogs', BlogPost)