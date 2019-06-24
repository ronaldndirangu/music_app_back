const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// require('./routes')(app);
app.use('*', (req, res) => (
  res.status(404).json({
    success: false,
    message: "Url not found"
  })
))

const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})