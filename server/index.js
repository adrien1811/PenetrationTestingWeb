const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());

app.use(cors({
  origin: "https://penetration-testing-web-client.vercel.app/", // Allow requests from all origins (Replace this with your frontend URL in production)
  methods: ["POST", "GET"],
  credentials: true
}));

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
    
    // Set the CORS header here
    res.header('Access-Control-Allow-Origin', '*'); // Set it to '*' for all origins
    
    res.send(`Output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
