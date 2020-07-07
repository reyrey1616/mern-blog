const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');

// INITIALIZE EXPRESS
const app = express();
app.get('/', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});
app.use(express.json());

// Set up a whitelist and check against it:
var whitelist = ['http://localhost:3000'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors());

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
