const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// INITIALIZE EXPRESS
const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

// Request body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Database Connection
connectDB();

// ROUTES
const users = require('./routes/users');
const blogs = require('./routes/blogs');
const auth = require('./routes/authentication');

// MOUNT ROUTERS
app.use('/api/users', users);
app.use('/api/blogs', blogs);
app.use('/api/auth', auth);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server is running on port ${PORT}`);
});
