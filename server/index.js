const app = require('express')();
const dotenv = require('dotenv');

// Assign global variables
dotenv.config({
  path: './config/config.env',
});

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello!');
});

app.listen(PORT, () => {
  console.log(`Application running on ${PORT}`);
});
