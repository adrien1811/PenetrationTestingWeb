const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const corsOptions = {
  origin: '*', // Change this to the specific frontend URL for production
  methods: ['POST', 'GET'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Handle preflight request for the '/execute' route
app.options('/execute', cors());

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
