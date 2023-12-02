const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: "https://penetration-testing-web-client.vercel.app/home",
  methods: ["POST"],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.options('/execute', cors(corsOptions));

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

    res.header('Access-Control-Allow-Origin', 'https://penetration-testing-web-client.vercel.app/home');
    res.send(`Output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
