const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001; // Adjust the port as needed

app.use(express.json());

const corsOptions = {
  origin: 'https://penetration-testing-web-client.vercel.app',
  methods: ['POST', 'GET'],
  credentials: true
};

app.use(cors(corsOptions));

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

    // Set CORS headers in the response
    res.header('Access-Control-Allow-Origin', 'https://penetration-testing-web-client.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.send(`Output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
