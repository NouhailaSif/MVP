// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Define a route to handle the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Notebook Project!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dataStorageApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Schema and routes
// Define your data schema and routes here...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
