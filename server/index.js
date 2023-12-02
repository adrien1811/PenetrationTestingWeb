const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001; // Adjust the port as needed

app.use(express.json());

const corsOptions = {
  origin: 'https://penetration-testing-web-client.vercel.app',
  methods: ['POST', 'GET'],
  credentials: true,
  optionsSuccessStatus: 200 // This is added to ensure that OPTIONS requests return a 200 status code
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions)); // Enable preflight requests for all routes

app.post('/execute', (req, res) => {
  const userInput = req.body.input;

  exec('ls ' + userInput, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      res.status(500).send(`Error: ${stderr}`);
      return;
    }

    res.send(`Output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
