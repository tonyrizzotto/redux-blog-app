const app = require('express')();
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Assign global variables
dotenv.config({
  path: './config/.env',
});

const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('hello!');
});

app.listen(PORT, () => {
  console.log(`Application running on ${PORT}`);
});
