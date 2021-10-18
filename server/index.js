const app = require('express')();
const connectDB = require('./config/db');
const postRoutes = require('./routes/posts');
const dotenv = require('dotenv');

// Assign global variables
dotenv.config({
  path: './config/.env',
});

const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();

// Health Check
app.get('/', (req, res) => {
  res.send('Healthy...');
});

// initialize Post Routes
// app.use(postRoutes);

// Launch app on port
app.listen(PORT, () => {
  console.log(`Application running on ${PORT}`);
});
