const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/execute', (req, res) => {
  const userInput = req.body.input;

  // Validate userInput to allow only alphanumeric characters and certain safe characters
  if (!/^[a-zA-Z0-9-_]+$/.test(userInput)) {
    res.status(400).send('Invalid input. Only alphanumeric characters, dashes, and underscores are allowed.');
    return;
  }

  exec(`dir ${userInput}`, (error, stdout, stderr) => {
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