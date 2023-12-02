const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Allow all origins (temporary for testing)
app.use(cors());

app.use(express.json());

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
