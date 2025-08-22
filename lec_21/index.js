const express = require('express');
const mongoose=require('mongoose');
const app = express();
let port = 1123;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/G27')
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});