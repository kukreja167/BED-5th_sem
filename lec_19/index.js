const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 1122;
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});